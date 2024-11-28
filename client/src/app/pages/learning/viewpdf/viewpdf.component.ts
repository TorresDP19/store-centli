import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GLOBAL } from '../../../services/GLOBAL';
import { ContentServices } from '../../../services/content.services';
import { UsersServices } from '../../../services/users.services';
import { PdfsServices } from "../../../services/pdfs.services";

import { DomSanitizer } from '@angular/platform-browser';
import { PDFS } from "../../../models/pdfs_model";
import { Content } from '../../../models/content_model';

@Component({
  selector: 'app-viewpdf',
  templateUrl: './viewpdf.component.html',
  styleUrls: ['./viewpdf.component.scss'],
  providers: [ UsersServices, ContentServices, PdfsServices]
})
export class ViewpdfComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public content: Content;
  public pdfs: PDFS[];

  constructor(
    private usersservices: UsersServices,
    private contentservices: ContentServices,
    private pdfsservices: PdfsServices,
    private route: ActivatedRoute,
    private router: Router,
    private sanitizer: DomSanitizer
  ) { 
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
  }

  ngOnInit(): void {
    AOS.init({
      once: true
    });
    this.downloadPDF();
  }

  downloadPDF() {
    this.route.params.forEach((params: Params) => {
      let id = params ['file'];
      this.pdfsservices.getFile(id).subscribe(
        response => {
          this.pdfs = [response.pdf];          
          console.log(this.pdfs);
        },
        error => {
          console.log(error);
        }
      )
    });
  }

}
