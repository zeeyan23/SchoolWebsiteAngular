import { StudentlistComponent } from './studentlist/studentlist.component';
import { AddstudentComponent } from './addstudent/addstudent.component';

import { Routes } from '@angular/router';



export const StudentRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addstudent',
        component: AddstudentComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'studentdetails',
        component: StudentlistComponent,
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