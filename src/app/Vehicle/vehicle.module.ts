import { VehiclelistComponent } from "./vehiclelist/vehiclelist.component";
import { RegvehicleComponent } from "./regvehicle/regvehicle.component";

import { NgxPrintModule } from "ngx-print";

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { Routes, RouterModule } from "@angular/router";
import { VehicleRoutes } from "./vehicle.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(VehicleRoutes),
    NgxPrintModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
  ],
  declarations: [RegvehicleComponent, VehiclelistComponent],
  exports: [RegvehicleComponent, VehiclelistComponent],
})
export class VehicleModule {}
