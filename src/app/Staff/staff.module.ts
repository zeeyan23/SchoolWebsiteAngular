import { StafflistComponent } from "./stafflist/stafflist.component";
import { AddstaffComponent } from "./addstaff/addstaff.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { CommonModule } from "@angular/common";
import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { StaffRoutes } from "./staff.routing";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(StaffRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  declarations: [StafflistComponent, AddstaffComponent],
  exports: [],
})
export class StaffModule {}
