import { BillviewComponent } from './billview/billview.component';
import { StudentfeeinfoComponent } from './studentfeeinfo/studentfeeinfo.component';

import { Routes } from '@angular/router';

import { ViewfeetypesComponent } from './viewfeetypes/viewfeetypes.component';
import { AddfeeComponent } from './addfee/addfee.component';

export const FeeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addfee',
        component: AddfeeComponent,
        data: {
          title: 'Add Fee',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Fee' }
          ]
        }
      },
      {
        path: 'viewfeetype',
        component: ViewfeetypesComponent,
        data: {
          title: 'View Fee',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View ' }
          ]
        }
      },
      {
        path: 'studentfeeinfo',
        component: StudentfeeinfoComponent,
        data: {
          title: 'View Fee',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View ' }
          ]
        }
      },
      {
        path: 'viewbill',
        component: BillviewComponent,
        data: {
          title: 'View Bill',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View Bill ' }
          ]
        }
      }
    
    ]
  }
];