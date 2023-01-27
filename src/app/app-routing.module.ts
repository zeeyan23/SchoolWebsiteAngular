import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FullComponent } from "./layouts/full/full.component";
import { BlankComponent } from "./layouts/blank/blank.component";
import {AuthenticationGuard} from './authentication.guard';  


export const Approutes: Routes = [
  {
    path: "",
    component: FullComponent,
    children: [
      { path: "", redirectTo: "/authentication/login", pathMatch: "full" },
      {
        path: "dashboard",
        // canActivate:[AuthenticationGuard],
        loadChildren: () =>
          import("./dashboards/dashboard.module").then(m => m.DashboardModule),
      },
      {
        path: "starter",
        loadChildren: () =>
          import("./starter/starter.module").then(m => m.StarterModule),
      },
      {
        path: "component",
        loadChildren: () =>
          import("./component/component.module").then(m => m.ComponentsModule),
      },
      {
        path: "cards",
        loadChildren: () =>
          import("./cards/cards.module").then(m => m.CardsModule),
      },
      {
        path: "fee",
        loadChildren: () => import("./fee/fee.module").then(m => m.FeeModule),
      },
      {
        path: "feereport",
        loadChildren: () =>
          import("./feereport/feereport.module").then(m => m.FeereportModule),
      },
      {
        path: "expense",
        loadChildren: () =>
          import("./expense/expense.module").then(m => m.ExpenseModule),
      },

      {
        path: "exam",
        loadChildren: () =>
          import("./exam/exam.module").then(m => m.ExamModule),
      },

      {
        path: "salary",
        loadChildren: () =>
          import("./salary/salary.module").then(m => m.SalaryModule),
      },
      {
        path: "penalty",
        loadChildren: () =>
          import("./penalty/penalty.module").then(m => m.PenaltyModule),
      },
      {
        path: "income",
        loadChildren: () =>
          import("./income/income.module").then(m => m.IncomeModule),
      },
      {
        path: "student",
        // canActivate:[AuthenticationGuard],
        loadChildren: () =>
          import("./student/student.module").then(m => m.StudentModule),
      },
      {
        path: "staff",
        loadChildren: () =>
          import("./staff/staff.module").then(m => m.StaffModule),
      },
      {
        path: "institute",
      
        loadChildren: () =>
          import("./institute/institute.module").then(m => m.InstituteModule),
      },
      {
        path: "class",
        loadChildren: () =>
          import("./class/class.module").then(m => m.ClassModule),
      },
      {
        path: "leave",
        loadChildren: () =>
          import("./leave/leave.module").then(m => m.LeaveModule),
      },
      {
        path: "calender",
        loadChildren: () =>
          import("./calender/calender.module").then(m => m.CalenderModule),
      },
      {
        path: "timetable",
        loadChildren: () =>
          import("./timetable/timetable.module").then(m => m.TimetableModule),
      },
      {
        path: "vehicle",
        loadChildren: () =>
          import("./vehicle/vehicle.module").then(m => m.VehicleModule),
      },
      {
        path: "root",
        loadChildren: () =>
          import("./root/root.module").then(m => m.RootModule),
      },
      {
        path: "transreport",
        loadChildren: () =>
          import("./transreport/transreport.module").then(
            m => m.TransreportModule
          ),
      },
      {
        path: "book",
        loadChildren: () =>
          import("./book/book.module").then(m => m.BookModule),
      },
      {
        path: "issued",
        loadChildren: () =>
          import("./issued/issued.module").then(m => m.IssuedModule),
      },
      {
        path: "recieved",
        loadChildren: () =>
          import("./recieved/recieved.module").then(m => m.RecievedModule),
      },
      {
        path: "homework",
        loadChildren: () =>
          import("./homework/homework.module").then(m => m.HomeworkModule),
      },
      {
        path: "quiz",
        loadChildren: () =>
          import("./quiz/quiz.module").then(m => m.QuizModule),
      },
      {
        path: "chats",
        loadChildren: () =>
          import("./Chats/chat.module").then(m => m.ChatModule),
      },
      {
        path: "group-chat",
        loadChildren: () =>
          import("./group-chat/group-chat.module").then(m => m.GroupchatModule),
      },

      {
        path: "icons",
        loadChildren: () =>
          import("./icons/icons.module").then(m => m.IconsModule),
      },
      {
        path: "forms",
        loadChildren: () =>
          import("./form/forms.module").then(m => m.FormModule),
      },
      {
        path: "tables",
        loadChildren: () =>
          import("./table/tables.module").then(m => m.TablesModule),
      },
      {
        path: "charts",
        loadChildren: () =>
          import("./charts/charts.module").then(m => m.ChartModule),
      },
      {
        path: "widgets",
        loadChildren: () =>
          import("./widgets/widgets.module").then(m => m.WidgetsModule),
      },
      {
        path: "ecom",
        loadChildren: () =>
          import("./ecommerce/ecom.module").then(m => m.EcomModule),
      },
      {
        path: "timeline",
        loadChildren: () =>
          import("./timeline/timeline.module").then(m => m.TimelineModule),
      },
      {
        path: "extra-component",
        loadChildren: () =>
          import("./extra-component/extra-component.module").then(
            m => m.ExtraComponentModule
          ),
      },
      {
        path: "apps",
        loadChildren: () =>
          import("./apps/apps.module").then(m => m.AppsModule),
      },
      {
        path: "apps/email",
        loadChildren: () =>
          import("./apps/email/mail.module").then(m => m.MailModule),
      },
      // {
      //   path: 'apps/Fee',
      //   loadChildren: () => import('./apps/Fee/Fee.module').then(m => m.FeeModule)
      // },
      {
        path: "maps",
        loadChildren: () =>
          import("./maps/maps.module").then(m => m.MapsModule),
      },
      {
        path: "notification",
        loadChildren: () =>
          import("./notifications/notification.module").then(m => m.NotificationModule),
      },

      {
        path: "transportmap",
        loadChildren: () =>
          import("./transportmap/transportmap.module").then(m => m.TransportmapModule),
      },
      {
        path: "sample-pages",
        loadChildren: () =>
          import("./sample-pages/sample-pages.module").then(
            m => m.SamplePagesModule
          ),
      },
    ],
  },
  {
    path: "",
    component: BlankComponent,
    children: [
      {
        path: "authentication",
        loadChildren: () =>
          import("./authentication/authentication.module").then(
            m => m.AuthenticationModule
          ),
      },
    ],
  },
  {
    path: "**",
    redirectTo: "/authentication/404",
  },
];


@NgModule({
  imports: [RouterModule.forRoot(Approutes, {})],
  exports: [RouterModule],
  providers: [ ]
})
export class AppRoutingModule { }