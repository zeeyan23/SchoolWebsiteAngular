import { ViewexpenseComponent } from './viewexpense/viewexpense.component';
import { AddexpenseComponent } from './addexpense/addexpense.component';



import { Routes } from '@angular/router';



export const ExpenseRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addexpense',
        component: AddexpenseComponent,
        data: {
          title: 'Add Expense',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Expense' }
          ]
        }
      },
      {
        path: 'viewexpense',
        component: ViewexpenseComponent,
        data: {
          title: 'View Expense',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'View Expense' }
          ]
        }
      },
      
    
    ]
  }
];