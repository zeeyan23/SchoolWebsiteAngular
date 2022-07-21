import { IncomedetailComponent } from "./incomedetail/incomedetail.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { IncomeRoutes } from "./income.routing";
import { FundComponent } from "./fund/fund.component";
import { AddfundComponent } from "./addfund/addfund.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IncomeRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
  ],
  declarations: [IncomedetailComponent, FundComponent, AddfundComponent],
  exports: [IncomedetailComponent],
})
export class IncomeModule {}
