import {ListnotificationComponent} from "./listnotification/listnotification.component";
import {SendnotificationComponent} from "./sendnotification/sendnotification.component";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { NotificationRoutes } from "./notification.routing";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(NotificationRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
   // NgxPrintModule,
  ],
  declarations: [ListnotificationComponent, SendnotificationComponent],
  exports: [ListnotificationComponent, SendnotificationComponent],
})
export class NotificationModule {}


