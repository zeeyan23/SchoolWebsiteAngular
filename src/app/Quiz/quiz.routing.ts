import { AddquizComponent } from './addquiz/addquiz.component';
import { IntroquizComponent } from "./introquiz/introquiz.component";
import { QuestionComponent } from "./question/question.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ListquestionComponent } from './listquestion/listquestion.component';

import { Routes } from "@angular/router";

export const QuizRoutes: Routes = [
  {
    path: "",
    children: [

        {
            path: "intro",
            component: IntroquizComponent,
            data: {
              title: "",
              urls: [
                { title: "Dashboard", url: "/dashboard" },
                { title: "intro" },
              ],
            },
          },
      {
        path: "quizzz",
        component: QuizComponent,
        data: {
          title: "",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Quiz" },
          ],
        },
      },
      {
        path: "question",
        component: QuestionComponent,
        data: {
          title: "",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Question" },
          ],
        },
      },
      {
        path: "addquestion",
        component: AddquizComponent,
        data: {
          title: "",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Add questions" },
          ],
        },
      },


      {
        path: "listquestion",
        component: ListquestionComponent,
        data: {
          title: "",
          urls: [
            { title: "Dashboard", url: "/dashboard" },
            { title: "Question list" },
          ],
        },
      },
     
    ],
  },
];
