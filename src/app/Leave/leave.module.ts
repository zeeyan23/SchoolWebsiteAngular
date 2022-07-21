import { LeaveapplComponent } from "./leaveappl/leaveappl.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { LeaveRoutes } from "./leave.routing";
import { LeavereportComponent } from "./leavereport/leavereport.component";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(LeaveRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  declarations: [LeaveapplComponent, LeavereportComponent],
  exports: [LeaveapplComponent],
})
export class LeaveModule {}
