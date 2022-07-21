import { SchoolcalenderComponent } from './schoolcalender/schoolcalender.component';




import { Routes } from '@angular/router';
import { ListcalenderComponent } from './listcalender/listcalender.component';



export const CalenderRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'schoolcalender',
        component: SchoolcalenderComponent,
        data: {
          title: 'School Calender',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'School Calender'}
          ]
        }
      },
     
      
    
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'listcalender',
        component: ListcalenderComponent,
        data: {
          title: 'School Calender',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'School Calender'}
          ]
        }
      },
     
      
    
    ]
  }
];