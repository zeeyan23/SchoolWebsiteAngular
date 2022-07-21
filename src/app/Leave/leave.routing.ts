import { LeavereportComponent } from './leavereport/leavereport.component';
import { LeaveapplComponent } from './leaveappl/leaveappl.component';



import { Routes } from '@angular/router';



export const LeaveRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'leaveapplication',
        component: LeaveapplComponent,
        data: {
          title: 'Apply Leave',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Leave Application' }
          ]
        }
      },
      {
        path: 'leavereport',
        component: LeavereportComponent,
        data: {
          title: 'Leave Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Leave Details' }
          ]
        }
      },
    
      
    
    ]
  }
];