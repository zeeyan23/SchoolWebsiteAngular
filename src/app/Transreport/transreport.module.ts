import { StudtransreportComponent } from './studtransreport/studtransreport.component';
import { StafftransreportComponent } from './stafftransreport/stafftransreport.component';

import {NgxPrintModule} from 'ngx-print';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from '@angular/router';
import {TransreportRoutes} from './transreport.routing';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";



@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(TransreportRoutes),
      NgxPrintModule,
      Ng2SearchPipeModule,
      FormsModule, ReactiveFormsModule,
      NgxPaginationModule],
    declarations: [ StudtransreportComponent,StafftransreportComponent],
    exports: [StudtransreportComponent,StafftransreportComponent]
  })
  export class TransreportModule {}