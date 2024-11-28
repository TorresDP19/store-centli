import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as AOS from '../../../../../node_modules/aos/dist/aos.js';

import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from '../../../services/users.services';
import { ContentServices } from '../../../services/content.services';
import { PdfsServices } from '../../../services/pdfs.services';
import { Content } from 'src/app/models/content_model';
import { PDFS } from 'src/app/models/pdfs_model';

@Component({
  selector: 'app-add-pdf',
  templateUrl: './add-pdf.component.html',
  styleUrls: ['./add-pdf.component.scss'],
  providers: [ UsersServices, ContentServices, PdfsServices ]
})
export class AddPdfComponent implements OnInit {

  public url:string;
  public content: Content;
  public pdfs: PDFS;
  public identity;
  public token;
  public alertMessage;

  constructor(
    private contentservices: ContentServices,
    private pdfservices: PdfsServices,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.url = GLOBAL.url;
    this.pdfs = new PDFS ('','','','','');
  }

  ngOnInit(): void {
    AOS.init({
      once: true 
   });
  }

  public onSubmit(f: NgForm) {
    this.route.params.forEach((params: Params) => {
      
      let contentId = params['idPDF'];
      this.pdfs.content = contentId;

      this.pdfservices.addNewFile(this.token, this.pdfs).subscribe(
        response => {
          if(!response.INFO_PDF) {
            this.alertMessage = 'Se encontraron problemas en el servidor.';
          } else {
            if(!this.filesToUpload) {
              this.alertMessage = 'Se añadió el PDF, pero no se adjuntó archivo.';
            } else {
              this.makeFileRequest(this.url + '/upload-pdf/' + response.INFO_PDF._id, [] , this.filesToUpload).then(
                (result:any) => {
                  this.pdfs.files = result.files;
                  this.alertMessage = 'El PDF se creó con éxito.';
                  this.pdfs = response.INFO_PDF; 
                }
              );
            }
          }
        },
        error => {
          console.log(error);
        }
      )

    });
  }

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;    
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>) {
    
    var token = this.token;

    return new Promise(function(resolve, reject){
      var formData: any = new FormData();
      var xhr = new XMLHttpRequest();

      for(var i = 0; i < files.length; i++) {
        formData.append('files', files[i], files[i].name);
      }

      xhr.onreadystatechange = function() {
        if(xhr.readyState == 4) {
          if(xhr.status == 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      }
      
      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', token);
      xhr.send(formData);

    });

  }

}
