import { DuestudentsComponent } from './duestudents/duestudents.component';
import { PaidstudentsComponent } from './paidstudents/paidstudents.component';


import { Routes } from '@angular/router';



export const FeereportRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'paidstudent',
        component: PaidstudentsComponent,
        data: {
          title: 'Paid Students',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Paid Students' }
          ]
        }
      },
      {
        path: 'duestudent',
        component: DuestudentsComponent,
        data: {
          title: 'Due Students',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Due Students' }
          ]
        }
      },
      
    
    ]
  }
];