import { AddtimetableComponent } from './addtimetable/addtimetable.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
// import {NgxPrintModule} from 'ngx-print';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';

import { Routes, RouterModule } from '@angular/router';
import {TimetableRoutes} from './timetable.routing';
import { TimetablelistComponent } from './timetablelist/timetablelist.component';
import { TeacheravailableComponent } from './teacheravailable/teacheravailable.component';
import { TimetabledialogComponent } from './timetabledialog/timetabledialog.component';




@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TimetableRoutes),
       // NgxPrintModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule, MatDialogModule
    ],
    declarations: [AddtimetableComponent, TimetablelistComponent, TeacheravailableComponent, TimetabledialogComponent],
    exports: [AddtimetableComponent]
})
  export class TimetableModule {}