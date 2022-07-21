import { ChatComponent } from './chat/chat.component';




import { Routes } from '@angular/router';



export const ChatRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'chat',
        component: ChatComponent,
        data: {
          title: 'Chat application',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Chat application'}
          ]
        }
      },
     
      
    
    ]
  }
];