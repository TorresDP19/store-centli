import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { CoursesServices } from '../../../services/courses.services';
import { Courses } from "../../../models/courses_model";
import { UsersServices } from '../../../services/users.services';
import { GLOBAL } from '../../../services/GLOBAL';

@Component({
  selector: 'app-learning-home',
  templateUrl: './learning-home.component.html',
  styleUrls: ['./learning-home.component.scss'],
  providers: [ UsersServices, CoursesServices ]
})
export class LearningHomeComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public courses: Courses[];
  public next_page;
  public prev_page;
  public searchTerm: string;

  constructor(
    private usersservices: UsersServices,
    private coursesservices: CoursesServices,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.next_page = 1;
    this.prev_page = 1;  
    
  }

  ngOnInit(): void {

    AOS.init({
      once: true // "true" --> Para desactivar animaciones repetidas al hacer scroll.
    //once: false // "false" --> Animaciones repetidas al hacer scroll.
   })

   this.getCourses();
   
  }


  getCourses() {
    this.route.params.forEach((params: Params) => {

      let page = + params['page'];
      if(!page){
        page = 1;
      } else {
        
        this.next_page = page + 1;
        this.prev_page = page - 1;

        if(this.prev_page == 0) {
          this.prev_page = 1;
        }
      }

      this.coursesservices.getCourses(page).subscribe(
        response => {
          if(response.page) {
            this.router.navigate(['/']);
          }
          else {
            this.courses = response.courses;
          }
        },
        error => {
          console.log(error);
        }
      )


    });
  }

}
