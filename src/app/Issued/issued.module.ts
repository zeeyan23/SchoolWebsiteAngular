import { IssuedregComponent } from "./issuedreg/issuedreg.component";
import { IssuedlistComponent } from "./issuedlist/issuedlist.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { IssuedRoutes } from "./issued.routing";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(IssuedRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
   // NgxPrintModule,
  ],
  declarations: [IssuedregComponent, IssuedlistComponent],
  exports: [IssuedregComponent, IssuedlistComponent],
})
export class IssuedModule {}
