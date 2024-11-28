import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CoursesServices } from '../../../services/courses.services';
import { ModuleServices } from '../../../services/modules.services';
import { UsersServices } from '../../../services/users.services';
import { GLOBAL } from '../../../services/GLOBAL';
import { Modules } from '../../../models/module_model';
import { Courses } from '../../../models/courses_model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modules-learning',
  templateUrl: './modules-learning.component.html',
  styleUrls: ['./modules-learning.component.scss'],
  providers: [ CoursesServices, ModuleServices, UsersServices ]
})
export class ModulesLearningComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public course: Courses;
  public modules: Modules[];
  public next_page;
  public prev_page;
  public alertMessage;

  constructor(
    private usersservices: UsersServices,
    private coursesservices: CoursesServices,
    private moduleservices: ModuleServices,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.next_page = 1;
    this.prev_page = 1;  
    this.course = new Courses('','','','','','');
  }

  ngOnInit(): void {

    
    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   });

   this.getCourses();

  }

  getCourses() {
    this.route.params.forEach((params: Params) => {
      
      let id = params['id'];

      this.coursesservices.getCourse(this.token, id).subscribe(
        response => {
          if(!response.course) {
            console.log('Se encontraron problemas en el servidor.');
          } else {
            this.course = response.course;
            this.moduleservices.getModules(response.course._id).subscribe (
              response => {                
                if(!response.modules) {
                  console.log('Se encontraron problemas en el servidor.');
                } else {
                  this.modules = response.modules;
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

  onCancelCourse() {
    this.confirm = null;
    document.querySelector(".TwoSection").scrollIntoView({behavior: "smooth"});
  }

  onDeleteConfirm(id) {
    this.confirm = id;
  }

  onDeleteCourse(id) {
    this.coursesservices.deleteCourse(this.token, id).subscribe(
      response => {
        if(!response.courseRemoved) {
          alert("Se encontraron problemas en el servidor. ");
        } else if(response.courseRemoved) {
          alert("El curso se eliminó con éxito.")
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
    document.querySelector(".TwoSection").scrollIntoView({behavior: "smooth"});
  }

  onUpdateCourse(id){
      this.coursesservices.updateCourse(this.token, id, this.course).subscribe(
        response => {                          
          if(!response.INFO_COURSE) {
            alert("Error en el servidor");
          } else {
            if(!this.filesToUpload) {
              alert("El curso se modificó con éxito, pero no se modificó la imagen.");
              this.course = response.INFO_COURSE;
              this.router.navigate(['/learning']);
            } else {
              this.makeFileRequest(this.url + '/add-image-course/' + response.INFO_COURSE._id, [], this.filesToUpload),
              (result: any) => {              
                this.course.image = result.image;
                alert("El curso se modificó con éxito.");
                this.alertMessage = 'El curso se modificó con éxito.';
                this.course = response.INFO_COURSE;
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
