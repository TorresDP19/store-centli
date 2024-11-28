import { Component, OnInit } from '@angular/core';
import * as AOS from '../.././../../../node_modules/aos/dist/aos.js';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { GLOBAL } from '../../../services/GLOBAL';
import { ContentServices } from '../../../services/content.services';
import { UsersServices } from '../../../services/users.services';
import { QuizServices } from '../../../services/quiz.services';

import { Content } from '../../../models/content_model';
import { Quiz } from '../../../models/quiz_model';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
  providers: [ UsersServices, ContentServices, QuizServices ]
})
export class QuizComponent implements OnInit {

  public url: string;
  public identity;
  public token;
  public content: Content;
  public quiz: Quiz[];

  constructor(
    private usersservices: UsersServices,
    private contentservices: ContentServices,
    private quizservices: QuizServices,
    private route: ActivatedRoute,
    private router: Router,
  ) { 
    this.url = GLOBAL.url;
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
  }

  ngOnInit(): void {
    this.getQuizzes();
    AOS.init({
      once: true
    })
  }

  getQuizzes() {
    this.route.params.forEach((params: Params) => {
      
      let id = params ['ids'];

      this.contentservices.getContent(this.token, id).subscribe(
        response => {
          if(!response.content) {
            console.log('Se encontraron problemas en el servidor.');
          } else {
            this.content = response.content;
            this.quizservices.getQuizzes(this.token, response.content._id).subscribe(
              response => {
                if(!response.quizzes) {
                  console.log();
                } else {
                  this.quiz = response.quizzes;
                  console.log(this.quiz);
                  
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
