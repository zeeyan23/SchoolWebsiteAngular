import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { NgxPaginationModule } from "ngx-pagination";
//import { NgxPrintModule } from "ngx-print";

import { Routes, RouterModule } from "@angular/router";
import { GroupChatRoutes } from "./group-chat.routing";
import { UsernameComponent } from '../groupchat-component/username/username.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(GroupChatRoutes),
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
   // NgxPrintModule,
  ],
  declarations: [
    ChatInboxComponent,
    UsernameComponent
  ],
  exports: [ChatInboxComponent],
})
export class GroupchatModule {}
