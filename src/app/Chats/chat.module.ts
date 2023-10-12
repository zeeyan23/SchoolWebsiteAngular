import { ChatComponent } from './chat/chat.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar";
import { Routes, RouterModule } from '@angular/router';
import {ChatRoutes} from './chat.routing';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(ChatRoutes),
      FormsModule , ReactiveFormsModule,
      Ng2SearchPipeModule,
      NgxPaginationModule,
    //  NgxPrintModule,
      PerfectScrollbarModule
     

    ],
    providers: [
      ],
    declarations: [ChatComponent],
    exports: []
  })
  export class ChatModule {}