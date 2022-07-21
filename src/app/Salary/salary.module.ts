import { AdvancedetailsComponent } from './advancedetails/advancedetails.component';
import { AddadvanceComponent } from './addadvance/addadvance.component';
import { SalarydetailsComponent } from './salarydetails/salarydetails.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";
import { Routes, RouterModule } from '@angular/router';
import {SalaryRoutes} from './salary.routing';



@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(SalaryRoutes),
      FormsModule , ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      NgxPrintModule
    ],
    declarations: [AdvancedetailsComponent,AddadvanceComponent,SalarydetailsComponent,AddsalaryComponent],
    exports: [AdvancedetailsComponent,AddadvanceComponent,SalarydetailsComponent,AddsalaryComponent]
  })
  export class SalaryModule {}