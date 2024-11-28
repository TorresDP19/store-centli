import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as AOS from '../../../../../node_modules/aos/dist/aos.js';

import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from '../../../services/users.services';
import { ContentServices } from '../../../services/content.services';
import { ModuleServices } from '../../../services/modules.services';
import { Modules } from 'src/app/models/module_model';
import { Content } from 'src/app/models/content_model';

@Component({
  selector: 'app-add-content',
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.scss'],
  providers: [ UsersServices, ContentServices, ModuleServices]
})
export class AddContentComponent implements OnInit {

  public url:string;
  public modules: Modules;
  public content: Content;
  public identity;
  public token;
  public alertMessage;

  constructor(
    private moduleservices: ModuleServices,
    private usersservices:UsersServices,
    private contentservices: ContentServices,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.url = GLOBAL.url;
    this.content = new Content ('','','','','','','');
  }

  ngOnInit(): void {
    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   })
  }

  public onSubmit(f: NgForm) {
    this.route.params.forEach((params: Params) => {

      let moduleId = params['id'];
      let courseId = params['ids'];

      this.content.course = courseId;
      this.content.module = moduleId;

      this.contentservices.addNewContent(this.token, this.content).subscribe(
        response => {
          if(!response.INFO_CONTENT) {
            alert("Se encontraron problemas en el servidor.");
            this.alertMessage = 'Se encontraron problemas en el servidor.';
          } else {
            if(!this.filesToUpload) {
              this.alertMessage = 'Se añadió el módulo, pero no se adjuntó imagen.';
            } else {
              this.makeFileRequest(this.url + '/upload-file/' + response.INFO_CONTENT._id, [] , this.filesToUpload).then(
                (result:any) => {
                  this.content.files = result.files;
                  this.alertMessage = "El contenido se creó con éxito.";
                  this.content = response.INFO_CONTENT;
                }
              );
            }
          }
        },
        error => {
          console.log(error);
        }
      )

    })
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
