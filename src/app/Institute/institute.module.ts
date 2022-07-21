import { InstitutedetailComponent } from './institutedetail/institutedetail.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {InstituteRoutes} from './institute.routing';





@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(InstituteRoutes),
      FormsModule , ReactiveFormsModule],
    declarations: [ InstitutedetailComponent ],
    exports: [ InstitutedetailComponent ]
  })
  export class InstituteModule {}