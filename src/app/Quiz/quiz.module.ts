import { QuestionComponent } from './question/question.component';
import { QuizComponent } from './quiz/quiz.component';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { QuizRoutes } from "./quiz.routing";
import { IntroquizComponent } from './introquiz/introquiz.component';
import { AddquizComponent } from './addquiz/addquiz.component';
import { ListquestionComponent } from './listquestion/listquestion.component';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(QuizRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  declarations: [QuestionComponent ,QuizComponent, IntroquizComponent, AddquizComponent, ListquestionComponent],
  exports: [QuestionComponent ,QuizComponent],
})
export class QuizModule {}
