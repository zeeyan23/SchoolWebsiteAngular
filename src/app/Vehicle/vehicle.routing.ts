import { VehiclelistComponent } from './vehiclelist/vehiclelist.component';
import { RegvehicleComponent } from './regvehicle/regvehicle.component';


import { Routes } from '@angular/router';



export const VehicleRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'regvehicle',
        component: RegvehicleComponent,
        data: {
          title: '',
          urls: [
            { title: 'Dashboard', url: '/dashboard' },
            { title: '' }
          ]
        }
      },
      {
        path: 'vehiclelist',
        component: VehiclelistComponent,
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