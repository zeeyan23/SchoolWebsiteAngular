import { DuestudentsComponent } from './duestudents/duestudents.component';
import { PaidstudentsComponent } from './paidstudents/paidstudents.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";

import { DatePipe } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';
import {FeereportRoutes} from './feereport.routing';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(FeereportRoutes),
      Ng2SearchPipeModule,
      NgxPaginationModule,
    //  NgxPrintModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [DuestudentsComponent,PaidstudentsComponent],
    exports: [DuestudentsComponent,PaidstudentsComponent],
    providers: [DatePipe]
  })
  export class FeereportModule {}