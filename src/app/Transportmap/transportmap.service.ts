import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransportmapService {

  constructor() { }
  
  Onlinedriver=[
    {
      lat:'13.3555',
      lng:'74.7044',
      driver_info:[
        {driver_name:"shivu", phone:"5364782736", vehicle_number:"KA-03-HA-1985"}
      ]
    },
    {
      lat:'13.1845',
      lng:'74.7505',
      driver_info:[
        {driver_name:"ganesh", phone:"5364782736", vehicle_number:"KA-03-HA-1689"}
      ]
    },
    {
      lat:'13.3369',
      lng:'74.7395',
      driver_info:[
        {driver_name:"deviprasadh", phone:"5364782736", vehicle_number:"KA-03-HA-1777"}
      ]
    },
   
  ]
}
