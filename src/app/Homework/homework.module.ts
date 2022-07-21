import {AddhomeworkComponent} from './addhomework/addhomework.component';
import {HomeworklistComponent} from './homeworklist/homeworklist.component';
import {AddclassworkComponent} from './addclasswork/addclasswork.component';
import {ClassworklistComponent} from './classworklist/classworklist.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPrintModule} from 'ngx-print';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { Routes, RouterModule } from '@angular/router';
import {HomeworkRoutes} from './homework.routing';

import { NgxPaginationModule } from "ngx-pagination";
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';




@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(HomeworkRoutes),
      NgxPrintModule,
      FormsModule , ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger', // set defaults here
      }),
    ],
      
    declarations: [ AddhomeworkComponent,HomeworklistComponent,AddclassworkComponent,ClassworklistComponent],
    exports: [],

  })
  export class HomeworkModule {}