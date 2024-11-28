import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as AOS from '../../../../../node_modules/aos/dist/aos.js';


import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from '../../../services/users.services';
import { CoursesServices } from '../../../services/courses.services';
import { Courses } from 'src/app/models/courses_model';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
  providers: [ UsersServices, CoursesServices]
})
export class AddCourseComponent implements OnInit {

  public url:string;
  public courses: Courses
  public identity;
  public token;
  public alertMessage;

  constructor(
    private coursesservices: CoursesServices,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.url = GLOBAL.url;
    this.courses = new Courses ('','','','','','');
  }

  ngOnInit(): void {

    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   })
  }

  public onSubmit(f:NgForm) {
    this.coursesservices.addNewCourse(this.token, this.courses).subscribe(
      response => {
        if(!response.INFO_COURSE) {
          this.alertMessage = 'Se encontraron problemas en el servidor.'
        } else {
          if(!this.filesToUpload) {
            this.alertMessage = 'Se añadió el curso, pero no se adjuntó imagen.';
          } else {
            this.makeFileRequest(this.url + '/add-image-course/' + response.INFO_COURSE._id, [] , this.filesToUpload).then(
              (result: any) => {
                this.courses.image = result.image;
                this.alertMessage = 'El curso se creó con éxito.'
                this.courses = response.INFO_COURSE;
              }
            );
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
