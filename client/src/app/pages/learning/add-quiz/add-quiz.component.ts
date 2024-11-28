import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NgForm } from "@angular/forms";
import * as AOS from '../../../../../node_modules/aos/dist/aos.js';

import { GLOBAL } from "../../../services/GLOBAL";
import { UsersServices } from '../../../services/users.services';
import { ContentServices } from '../../../services/content.services';
import { QuizServices } from '../../../services/quiz.services';
import { Content } from 'src/app/models/content_model';
import { Quiz } from 'src/app/models/quiz_model';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss'],
  providers: [ UsersServices, ContentServices, QuizServices ]
})

export class AddQuizComponent implements OnInit {

  public url:string;
  public content: Content;
  public quiz: Quiz;
  public identity;
  public token;
  public alertMessage;

  constructor(
    private contentservices: ContentServices,
    private quizservices: QuizServices,
    private usersservices:UsersServices,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    this.identity = this.usersservices.getIdentity();
    this.token = this.usersservices.getToken();
    this.url = GLOBAL.url;
    this.quiz = new Quiz ('','','','');
  }

  ngOnInit(): void {
    AOS.init({
      once: true
    });
  }

  public onSubmit(f: NgForm) {
    this.route.params.forEach((params: Params) => {
      
      let contentId = params['idQuiz'];
      this.quiz.content = contentId;

      this.quizservices.addNewQuiz(this.token, this.quiz).subscribe(
        response => {
          if(!response.INFO_QUIZ) {
            this.alertMessage = 'Se encontraron problemas en el servidor.';
          } else {
            this.alertMessage = 'El examen se creó con éxito.';
            this.quiz = response.INFO_QUIZ;
          }
        },
        error => {
          console.log(error);
        }
      )

    });
  }

}
