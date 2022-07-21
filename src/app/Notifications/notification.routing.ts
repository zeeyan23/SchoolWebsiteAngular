import {ListnotificationComponent} from "./listnotification/listnotification.component";
import {SendnotificationComponent} from "./sendnotification/sendnotification.component";


import { Routes } from '@angular/router';



export const NotificationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listnoty',
        component: ListnotificationComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'sendnoty',
        component: SendnotificationComponent,
        data: {
          title: 'Penalty List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Penalty List' }
          ]
        }
      },
     
    ]
  }
];