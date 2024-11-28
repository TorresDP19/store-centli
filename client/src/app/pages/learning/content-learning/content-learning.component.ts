import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { GLOBAL } from '../../../services/GLOBAL';
import { CoursesServices } from '../../../services/courses.services';
import { ModuleServices } from '../../../services/modules.services';
import { ContentServices } from '../../../services/content.services';
import { UsersServices } from '../../../services/users.services';

import { Courses } from '../../../models/courses_model';
import { Modules } from '../../../models/module_model';
import { Content } from '../../../models/content_model';


@Component({
  selector: 'app-content-learning',
  templateUrl: './content-learning.component.html',
  styleUrls: ['./content-learning.component.scss'],
  providers: [ CoursesServices, ModuleServices, ContentServices, UsersServices]
})
export class ContentLearningComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public course: Courses;
  public module: Modules;
  public content: Content[];

  constructor(
    private usersservices: UsersServices,
    private coursesservices: CoursesServices,
    private moduleservices: ModuleServices,
    private contentservices: ContentServices,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.module = new Modules('','','','','');
  }

  ngOnInit(): void {

    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
      //once: false // "false" --> Animaciones repetidas al hacer scroll.
   });


   this.getContent();

  }

  getContent() {
    this.route.params.forEach((params: Params) => {
      
      let id = params['id'];  

      this.moduleservices.getModule(this.token, id).subscribe(
        response => {
          if(!response.module) {
            console.log('Se encontraron problemas en el servidor.');
          } else {
            this.module = response.module;
            this.contentservices.getContents(response.module._id).subscribe(
              response => {
                if(!response.content) {
                  console.log('Se encontraron problemas en el servidor.');
                } else {
                  this.content = response.content;
                  console.log(this.content);               
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

  public confirm;

  onCancelModule() {
    this.confirm = null;
    document.querySelector(".First").scrollIntoView({behavior: "smooth"});
  }

  onDeleteConfirm(id) {
    this.confirm = id;
  }

  
  onDeleteContent(id) {
    this.moduleservices.deleteModule(this.token, id).subscribe(
      response => {
        if(!response.module) {
          alert("Se encontraron problemas en el servidor. ");
        } else if(response.module) {
          alert("El módulo se eliminó con éxito.");
          this.router.navigate(['/learning']);
        } 
      }, 
      error => {
        console.log(error);
      }
    )
  }

  public update;

  onUpdateConfirm(id) {
    this.update = id;
  }

  onUpdateCancel() {
    this.update = null;
    document.querySelector(".First").scrollIntoView({behavior: "smooth"});
  }

  onUpdateContent(id){
    this.moduleservices.updateModule(this.token, id, this.module).subscribe(
      response => {                          
        if(!response.module) {
          alert("Error en el servidor");
        } else {
          if(!this.filesToUpload) {
            this.module = response.module;
            alert("El módulo se modificó con éxito, pero no se modificó la imagen.");
            this.router.navigate(['/learning']);
          } else {
            this.makeFileRequest(this.url + '/add-image-module/' + response.module._id, [], this.filesToUpload),
            (result: any) => {              
              this.module.image = result.image;
              this.module = response.module;
              alert("El módulo se modificó con éxito.");
              this.router.navigate(['/learning']);
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  public filesToUpload: Array<File>;

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;    
    console.log(this.filesToUpload);
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
