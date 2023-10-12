import { ViewexpenseComponent } from "./viewexpense/viewexpense.component";
import { AddexpenseComponent } from "./addexpense/addexpense.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { ExpenseRoutes } from "./expense.routing";
import { ExpensedialogComponent } from "./expensedialog/expensedialog.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ExpenseRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
   // NgxPrintModule,
  ],
  declarations: [
    ViewexpenseComponent,
    AddexpenseComponent,
    ExpensedialogComponent,
  ],
  exports: [ViewexpenseComponent, AddexpenseComponent],
})
export class ExpenseModule {}
