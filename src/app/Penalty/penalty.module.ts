import { PenaltylistComponent } from "./penaltylist/penaltylist.component";
import { AddpenaltyComponent } from "./addpenalty/addpenalty.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { PenaltyRoutes } from "./penalty.routing";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PenaltyRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
   // NgxPrintModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here
    }),
  ],
  declarations: [PenaltylistComponent, AddpenaltyComponent],
  exports: [PenaltylistComponent, AddpenaltyComponent],
})
export class PenaltyModule {}
