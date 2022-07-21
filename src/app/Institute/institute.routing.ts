import { InstitutedetailComponent } from './institutedetail/institutedetail.component';


import { Routes } from '@angular/router';



export const InstituteRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'institutedetails',
        component: InstitutedetailComponent,
        data: {
          title: 'Institute Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      }
     ]
  },
 
];