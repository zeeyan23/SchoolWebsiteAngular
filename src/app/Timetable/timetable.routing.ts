import { AddtimetableComponent } from './addtimetable/addtimetable.component';
import {TimetablelistComponent} from './timetablelist/timetablelist.component';
import{TeacheravailableComponent} from './teacheravailable/teacheravailable.component';


import { Routes } from '@angular/router';



export const TimetableRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addtimetable',
        component: AddtimetableComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'listtimetable',
        component: TimetablelistComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'availableteacher',
        component: TeacheravailableComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      }
    
    ]
  }
];