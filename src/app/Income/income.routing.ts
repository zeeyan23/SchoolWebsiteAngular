import { AddfundComponent } from './addfund/addfund.component';
import { FundComponent } from './fund/fund.component';
import { IncomedetailComponent } from './incomedetail/incomedetail.component';


import { Routes } from '@angular/router';



export const IncomeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'incomedetails',
        component: IncomedetailComponent,
        data: {
          title: 'Income Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      }
     ]
  },
  {
    path: '',
    children: [
      {
        path: 'funddetails',
        component: FundComponent,
        data: {
          title: 'Fund Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      }
     ]
  },
  {
    path: '',
    children: [
      {
        path: 'addfund',
        component: AddfundComponent,
        data: {
          title: 'Income Details',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      }
     ]
  }
];