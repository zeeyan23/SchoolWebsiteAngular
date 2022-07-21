import { ClasslistComponent } from './classlist/classlist.component';
import { AddclassComponent } from './addclass/addclass.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from '@angular/router';
import {ClassRoutes} from './class.routing';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(ClassRoutes),
      FormsModule , ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      NgxPrintModule,
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger', // set defaults here
      }),
  

    ],
    declarations: [ClasslistComponent,
      AddclassComponent],
    exports: [ClasslistComponent,
      AddclassComponent]
  })
  export class ClassModule {}