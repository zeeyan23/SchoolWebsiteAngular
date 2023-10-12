import 'flatpickr/dist/flatpickr.css';
import { SchoolcalenderComponent } from './schoolcalender/schoolcalender.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from '@angular/router';
import {CalenderRoutes} from './calender.routing';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { ListcalenderComponent } from './listcalender/listcalender.component';




@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(CalenderRoutes),
      NgbModalModule,
      FormsModule ,
      Ng2SearchPipeModule,
      NgxPaginationModule, 
      ReactiveFormsModule,
     // NgxPrintModule,
      FlatpickrModule.forRoot(),
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger', // set defaults here
      }),
      CalendarModule.forRoot({
        provide: DateAdapter,
        useFactory: adapterFactory,
      }),],
    declarations: [SchoolcalenderComponent, ListcalenderComponent],
    exports: [SchoolcalenderComponent,ListcalenderComponent],
    providers:[DatePipe]
  })
  export class CalenderModule {}