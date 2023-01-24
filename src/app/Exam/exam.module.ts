import {ListexamComponent} from "./listexam/listexam.component";
import {AddexamComponent} from "./addexam/addexam.component";
import{AddmarksheetComponent} from "./addmarksheet/addmarksheet.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { ExamRoutes } from "./exam.routing";
import { ShowmarksheetComponent } from './showmarksheet/showmarksheet.component';
import { ExamdialogComponent } from './examdialog/examdialog.component';
import { DialogmarksheetComponent } from "./dialogmarksheet/dialogmarksheet.component";


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ExamRoutes),
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        NgxPrintModule
    ],
    declarations: [
        ListexamComponent,
        AddexamComponent,
        AddmarksheetComponent,
        ShowmarksheetComponent,
        ExamdialogComponent,
    ],
    exports: [ListexamComponent, AddexamComponent, AddmarksheetComponent]
})
export class ExamModule {}
