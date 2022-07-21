import { RootlistComponent } from './rootlist/rootlist.component';
import { RegrootComponent } from './regroot/regroot.component';


import { Routes } from '@angular/router';



export const RootRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'regroot',
        component: RegrootComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'rootlist',
        component: RootlistComponent,
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