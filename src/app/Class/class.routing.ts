import { ClasslistComponent } from './classlist/classlist.component';
import { AddclassComponent } from './addclass/addclass.component';



import { Routes } from '@angular/router';



export const ClassRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addclass',
        component: AddclassComponent,
        data: {
          title: 'Add Class',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Class' }
          ]
        }
      },
      {
        path: 'classlist',
        component: ClasslistComponent,
        data: {
          title: 'Class List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Class List' }
          ]
        }
      },
      
    
    ]
  }
];