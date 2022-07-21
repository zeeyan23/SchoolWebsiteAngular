
import { TransportmapComponent } from "./transportmap/transportmap.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AgmOverlays } from 'agm-overlays';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";

import{TransportmapRoutes} from "./transportmap.routing";
import { AgmCoreModule } from "@agm/core";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TransportmapRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
    AgmCoreModule.forRoot({
        apiKey: "AIzaSyCXGeL7Y3DNAK6tlE73KPJ6Q7as6dIWNlk",
      }),
      AgmOverlays
  ],
  declarations: [TransportmapComponent],
  exports: [],
})
export class TransportmapModule {}
