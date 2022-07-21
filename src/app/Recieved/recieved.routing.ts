import { RecievedlistComponent } from './recievedlist/recievedlist.component';
import { AddrecievedComponent } from './addrecieved/addrecieved.component';





import { Routes } from '@angular/router';



export const RecievedRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'addrecieve',
        component: AddrecievedComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Add Class' }
          ]
        }
      },
      {
        path: 'recievedlist',
        component: RecievedlistComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Class List' }
          ]
        }
      },
      
    
    ]
  }
];