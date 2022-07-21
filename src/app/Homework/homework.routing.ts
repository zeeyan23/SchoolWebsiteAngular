import {AddhomeworkComponent} from './addhomework/addhomework.component';
import {HomeworklistComponent} from './homeworklist/homeworklist.component';
import {AddclassworkComponent} from './addclasswork/addclasswork.component';
import {ClassworklistComponent} from './classworklist/classworklist.component';



import { Routes } from '@angular/router';



export const HomeworkRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addhomework',
        component: AddhomeworkComponent,
        data: {
          title: 'Add Homework',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'homeworklist',
        component: HomeworklistComponent ,
        data: {
          title: 'Homework List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'addclasswork',
        component: AddclassworkComponent ,
        data: {
          title: 'Add Classwork',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'classworklist',
        component: ClassworklistComponent ,
        data: {
          title: 'Classwork List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      }
      
      
    
    ]
  }
];