import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContentComponent } from './add-content/add-content.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { AddPdfComponent } from './add-pdf/add-pdf.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { ContentLearningComponent } from './content-learning/content-learning.component';
import { LearningHomeComponent } from './learning-home/learning-home.component';
import { LearningComponent } from './learning.component';
import { ModulesLearningComponent } from './modules-learning/modules-learning.component';
import { PdfLearningComponent } from './pdf-learning/pdf-learning.component';
import { QuizComponent } from './quiz/quiz.component';
import { SigninComponent } from './signin/signin.component';
import { VideosLearningComponent } from './videos-learning/videos-learning.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';

const routes: Routes = [
  { path: '', component: LearningComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'add-content', component: AddContentComponent },
  { path: 'home', component: LearningHomeComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'add-course', component: AddCourseComponent },
  { path: 'course/:id', component: ModulesLearningComponent }, 
  { path: 'course/:id/add-module/:course', component: AddModuleComponent }, 
  { path: 'course/:ids/content/:id/add-content/:module', component: AddContentComponent },
  { path: 'course/:id/content/:id', component: ContentLearningComponent },
  { path: 'course/:id/content/:id/pdfs/:ids', component: PdfLearningComponent },
  { path: 'course/:id/content/:id/pdfs/:id/add-pdf/:idPDF', component: AddPdfComponent },
  { path: 'course/:id/content/:id/pdfs/:id/view/:file', component: ViewpdfComponent },
  { path: 'course/:id/content/:id/videos/:ids', component: VideosLearningComponent },
  { path: 'course/:id/content/:id/videos/:id/view/:file', component: ViewvideoComponent},
  { path: 'course/:id/content/:id/videos/:id/add-video/:idVideo', component: AddVideoComponent },
  { path: 'course/:id/content/:id/quizzes/:ids', component: QuizComponent },
  { path: 'course/:id/content/:id/quizzes/:id/add-quiz/:idQuiz', component: AddQuizComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LearningRoutingModule { }
