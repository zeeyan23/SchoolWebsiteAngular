import { IssuedlistComponent } from './issuedlist/issuedlist.component';
import { IssuedregComponent } from './issuedreg/issuedreg.component';




import { Routes } from '@angular/router';



export const IssuedRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'issuedreg',
        component: IssuedregComponent,
        data: {
          title: 'Issued Book Register',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Class' }
          ]
        }
      },
      {
        path: 'issuedlist',
        component: IssuedlistComponent,
        data: {
          title: 'Issued Book List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Class List' }
          ]
        }
      },
      
    
    ]
  }
];