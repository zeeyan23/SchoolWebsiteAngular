import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
// import {NgxPrintModule} from 'ngx-print';
import {FormsModule , ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { Routes, RouterModule } from '@angular/router';
import {StudentRoutes} from './student.routing';
import { DatePipe } from '@angular/common';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';



@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(StudentRoutes),
    //  NgxPrintModule,
      FormsModule , 
      ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
      ConfirmationPopoverModule.forRoot({
        confirmButtonType: 'danger', // set defaults here
      }),
    ],
    declarations: [ StudentlistComponent,AddstudentComponent],
    exports: [StudentlistComponent,AddstudentComponent],
    providers: [DatePipe]
  })
  export class StudentModule {}