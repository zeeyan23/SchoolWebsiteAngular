
import {TransportmapComponent} from './transportmap/transportmap.component';
import { Routes } from '@angular/router';



export const TransportmapRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'Tranportmap',
        component: TransportmapComponent,
        data: {
          title: 'view map',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: 'Tranportmap' }
          ]
        }
      }
      
    
      
    
    ]
  }
];