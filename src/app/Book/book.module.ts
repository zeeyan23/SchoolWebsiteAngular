import { BookpendingComponent } from './bookpending/bookpending.component';
import { BooklistComponent } from './booklist/booklist.component';

import { FormsModule , ReactiveFormsModule} from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
import { NgxPrintModule } from "ngx-print";


import { Routes, RouterModule } from '@angular/router';
import {BookRoutes} from './book.routing';
import { AddbooksComponent } from './addbooks/addbooks.component';


@NgModule({
    imports: [
      CommonModule,
      RouterModule.forChild(BookRoutes),
      FormsModule , ReactiveFormsModule,
      Ng2SearchPipeModule,
    NgxPaginationModule,
    NgxPrintModule,
       
    ],
    declarations: [BookpendingComponent,BooklistComponent, AddbooksComponent],
    exports: [BookpendingComponent,BooklistComponent]
  })
  export class BookModule {}