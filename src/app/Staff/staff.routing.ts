import { StafflistComponent } from './stafflist/stafflist.component';
import { AddstaffComponent } from './addstaff/addstaff.component';



import { Routes } from '@angular/router';



export const StaffRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addstaff',
        component: AddstaffComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'stafflist',
        component: StafflistComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
     
    ]
  }
];