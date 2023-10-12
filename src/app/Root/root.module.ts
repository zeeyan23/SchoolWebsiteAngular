import { RootlistComponent } from './rootlist/rootlist.component';
import { RegrootComponent } from './regroot/regroot.component';

// import {NgxPrintModule} from 'ngx-print';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { Routes, RouterModule } from '@angular/router';
import {RootRoutes} from './root.routing';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";



@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(RootRoutes),
    //  NgxPrintModule,
      FormsModule , 
      ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule
    ],
    declarations: [ RootlistComponent,RegrootComponent],
    exports: [RootlistComponent,RegrootComponent]
  })
  export class RootModule {}