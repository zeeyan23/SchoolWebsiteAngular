import { AdvancedetailsComponent } from './advancedetails/advancedetails.component';
import { AddadvanceComponent } from './addadvance/addadvance.component';
import { SalarydetailsComponent } from './salarydetails/salarydetails.component';
import { AddsalaryComponent } from './addsalary/addsalary.component';
import { Routes } from '@angular/router';



export const SalaryRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addsalary',
        component: AddsalaryComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'salarydetails',
        component: SalarydetailsComponent,
        data: {
          title: 'Salary List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Salary List ' }
          ]
        }
      },
      {
        path: 'addadvance',
        component: AddadvanceComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: ' ' }
          ]
        }
      },
      {
        path: 'advancedetails',
        component: AdvancedetailsComponent,
        data: {
          title: 'Advance List',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: ' ' }
          ]
        }
      }
    
    ]
  }
];