import { ChatInboxComponent } from './chat-inbox/chat-inbox.component';




import { Routes } from '@angular/router';



export const GroupChatRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chatbox',
        component: ChatInboxComponent,
        data: {
          title: 'Group chat',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Expense' }
          ]
        }
      },
    
    ]
  }
];