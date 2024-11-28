import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as AOS from '../../../../../node_modules/aos/dist/aos.js';

import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from '../../../services/users.services';
import { ModuleServices } from '../../../services/modules.services';
import { CoursesServices } from '../../../services/courses.services';
import { Modules } from 'src/app/models/module_model';
import { Courses } from 'src/app/models/courses_model';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss'],
  providers: [ UsersServices, ModuleServices, CoursesServices ]
})
export class AddModuleComponent implements OnInit {

  public url:string;
  public modules: Modules;
  public courses: Courses;
  public identity;
  public token;
  public alertMessage;

  constructor(
    private moduleservices: ModuleServices,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.url = GLOBAL.url;
    this.modules = new Modules ('','','','','');
  }

  ngOnInit(): void {
    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   })
  }

  public onSubmit(f:NgForm) {
    this.route.params.forEach((params: Params) => {
      
      let courseId = params['id'];
      this.modules.course = courseId;

      this.moduleservices.addNewModule(this.token, this.modules).subscribe(
        response => {
          if(!response.INFO_MODULE) {
            this.alertMessage = 'Se encontraron problemas en el servidor.'
          } else {
            if(!this.filesToUpload) {
              this.alertMessage = 'Se añadió el módulo, pero no se adjuntó imagen.';
            } else {
              this.makeFileRequest(this.url + '/add-image-module/' + response.INFO_MODULE._id, [] , this.filesToUpload).then(
              (result:any) => {
                this.modules.image = result.image;
                this.alertMessage = 'El módulo se creó con éxito.';
                this.modules = response.INFO_MODULE 
              }
              );
            }
          }
        },
        error =>{
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
        formData.append('image', files[i], files[i].name);
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
