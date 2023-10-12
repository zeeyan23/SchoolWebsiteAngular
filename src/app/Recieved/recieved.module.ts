import { RecievedlistComponent } from "./recievedlist/recievedlist.component";
import { AddrecievedComponent } from "./addrecieved/addrecieved.component";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { Routes, RouterModule } from "@angular/router";
import { RecievedRoutes } from "./recieved.routing";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RecievedRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
   // NgxPrintModule,
  ],
  declarations: [RecievedlistComponent, AddrecievedComponent],
  exports: [RecievedlistComponent, AddrecievedComponent],
})
export class RecievedModule {}
