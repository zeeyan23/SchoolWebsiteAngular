import { StudtransreportComponent } from './studtransreport/studtransreport.component';


import { Routes } from '@angular/router';
import { StafftransreportComponent } from './stafftransreport/stafftransreport.component';



export const TransreportRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'studreport',
        component: StudtransreportComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'staffreport',
        component: StafftransreportComponent,
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