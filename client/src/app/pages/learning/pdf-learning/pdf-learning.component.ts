import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { GLOBAL } from '../../../services/GLOBAL';
import { ContentServices } from '../../../services/content.services';
import { UsersServices } from '../../../services/users.services';
import { PdfsServices } from '../../../services/pdfs.services';

import { Content } from '../../../models/content_model';
import { PDFS } from '../../../models/pdfs_model';

@Component({
  selector: 'app-pdf-learning',
  templateUrl: './pdf-learning.component.html',
  styleUrls: ['./pdf-learning.component.scss'],
  providers: [ UsersServices, ContentServices, PdfsServices]
})
export class PdfLearningComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public content: Content;
  public pdf: PDFS[];

  constructor(
    private usersservices: UsersServices,
    private contentservices: ContentServices,
    private pdfsservices: PdfsServices,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
  }
  
  ngOnInit(): void {
    this.getPDFS();
    AOS.init({
      once: true
    })
  }

  getPDFS() {
    this.route.params.forEach((params: Params) => {
        
        let id = params ['ids'];

        this.contentservices.getContent(this.token, id).subscribe (
          response => {
            if(!response.content) {
              console.log('Se encontraron problemas en el servidor.');
            } else {
              this.content = response.content;
              this.pdfsservices.getFiles(this.token, response.content._id).subscribe(
                response => {
                  if(!response.pdfs) {
                    console.log('Se encontraron problemas en el servidor.');
                  } else {
                    this.pdf = response.pdfs;
                    console.log(this.pdf);
                  }
                }, 
                error => {
                  console.log(error);
                }
              )

            }
          },
          error => {
            console.log(error);
          }
        )

    });
  }
}
