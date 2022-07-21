import { ViewfeetypesComponent } from "./viewfeetypes/viewfeetypes.component";
import { AddfeeComponent } from "./addfee/addfee.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatDialogModule } from "@angular/material/dialog";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { FeeRoutes } from "./fee.routing";
import { StudentfeeinfoComponent } from "./studentfeeinfo/studentfeeinfo.component";
import { BillviewComponent } from "./billview/billview.component";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(FeeRoutes),
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
  ],
  declarations: [
    AddfeeComponent,
    ViewfeetypesComponent,
    StudentfeeinfoComponent,
    BillviewComponent,
  ],
  exports: [ViewfeetypesComponent, StudentfeeinfoComponent, BillviewComponent],
})
export class FeeModule {}
