import { AddbooksComponent } from './addbooks/addbooks.component';
import { BookpendingComponent } from './bookpending/bookpending.component';
import { BooklistComponent } from './booklist/booklist.component';




import { Routes } from '@angular/router';



export const BookRoutes: Routes = [
  {
    path: '',
    children: [
        {
            path: 'addbook',
            component: AddbooksComponent,
            data: {
              title: 'Register Books',
              urls: [
                { title: 'Dashboard', url: '/dashboard' },
                { title: 'Add Class' }
              ]
            }
          },
      {
        path: 'booklist',
        component: BooklistComponent,
        data: {
          title: 'Books List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Class' }
          ]
        }
      },
      {
        path: 'pendingbook',
        component: BookpendingComponent,
        data: {
          title: 'Pending Books List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Class List' }
          ]
        }
      },
      
    
    ]
  }
];