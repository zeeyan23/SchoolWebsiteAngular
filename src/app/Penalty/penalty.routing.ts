import { PenaltylistComponent } from './penaltylist/penaltylist.component';
import { AddpenaltyComponent } from './addpenalty/addpenalty.component';


import { Routes } from '@angular/router';



export const PenaltyRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addpenalty',
        component: AddpenaltyComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'penaltylist',
        component: PenaltylistComponent,
        data: {
          title: 'Penalty List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Penalty List' }
          ]
        }
      },
     
    ]
  }
];