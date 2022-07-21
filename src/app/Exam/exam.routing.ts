
import { AddexamComponent } from './addexam/addexam.component';
import { AddmarksheetComponent } from './addmarksheet/addmarksheet.component';
import { ListexamComponent } from './listexam/listexam.component';
import { ShowmarksheetComponent } from './showmarksheet/showmarksheet.component';



import { Routes } from '@angular/router';



export const ExamRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addexam',
        component: AddexamComponent,
        data: {
          title: 'Add Exam',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Exam' }
          ]
        }
      },
      {
        path: 'addmark',
        component: AddmarksheetComponent,
        data: {
          title: 'Add Mark',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add mark' }
          ]
        }
      },
      {
        path: 'listexam',
        component: ListexamComponent,
        data: {
          title: 'View Exam',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View Exam' }
          ]
        }
      },
      {
        path: 'showmarksheet',
        component: ShowmarksheetComponent,
        data: {
          title: 'View Mark',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View Exam' }
          ]
        }
      },
    
    ]
  }
];