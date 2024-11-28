import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LearningRoutingModule } from './learning-routing.module';
import { LearningComponent } from './learning.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddContentComponent } from './add-content/add-content.component';
import { LearningHomeComponent } from './learning-home/learning-home.component';
import { CoursesFilterPipe } from './learning.filter.pipe';
import { ModulesLearningComponent } from './modules-learning/modules-learning.component';
import { ContentLearningComponent } from './content-learning/content-learning.component';
import { AddModuleComponent } from './add-module/add-module.component';
import { PdfLearningComponent } from './pdf-learning/pdf-learning.component';
import { VideosLearningComponent } from './videos-learning/videos-learning.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';
import { AddVideoComponent } from './add-video/add-video.component';
import { AddPdfComponent } from './add-pdf/add-pdf.component';
import { ViewpdfComponent } from './viewpdf/viewpdf.component';
import { AddQuizComponent } from './add-quiz/add-quiz.component';
import { QuizComponent } from './quiz/quiz.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  declarations: [
    LearningComponent,
    AddCourseComponent,
    AddContentComponent,
    LearningHomeComponent,
    CoursesFilterPipe,
    ModulesLearningComponent,
    ContentLearningComponent,
    AddModuleComponent,
    PdfLearningComponent,
    VideosLearningComponent,
    ViewvideoComponent,
    AddVideoComponent,
    AddPdfComponent,
    ViewpdfComponent,
    AddQuizComponent,
    QuizComponent,
    SigninComponent,
  ],
  imports: [
    CommonModule,
    LearningRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
})
export class LearningModule { }
