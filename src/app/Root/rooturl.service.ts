import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RooturlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Root=[
    {
      Route_name:'UDP-Juction',
      Type:'car',
      vehicle_num:'5674 KA 20 ',
      Driver_name:'Sam',
      mobile_num:'5678876890',
      amount:'5000',
      stopname:'UDPI-Manipal 4.30pm, AMBALPADY 5.00pm ,MANGLORE 5.30PM'
    },
    {
      Route_name:'MANIPAL-Juction',
      Type:'Bus',
      vehicle_num:'6021 KA 20 ',
      Driver_name:'John',
      mobile_num:'5678876890',
      amount:'4000',
      stopname:'UDPI-Manipal 4.30pm, AMBALPADY 5.00pm ,MANGLORE 5.30PM'
    },
    {
      Route_name:'MANGLR-Juction',
      Type:'Bus',
      vehicle_num:'6894 KA 20 ',
      Driver_name:'Sam',
      mobile_num:'5678876890',
      amount:'5000',
      stopname:'UDPI-Manipal 4.30pm, AMBALPADY 5.00pm ,MANGLORE 5.30PM'
    },
    {
      Route_name:'AMBALPAY-Juction',
      Type:'Bus',
      vehicle_num:'5674 KA 20 ',
      Driver_name:'peter',
      mobile_num:'5678876890',
      amount:'5000',
      stopname:'UDPI-Manipal 4.30pm, AMBALPADY 5.00pm ,MANGLORE 5.30PM'
    },
    {
      Route_name:'MULKY-Juction',
      Type:'Bus',
      vehicle_num:'7979 KA 20 ',
      Driver_name:'Ram',
      mobile_num:'5678876890',
      amount:'3000',
      stopname:'UDPI-Manipal 4.30pm, AMBALPADY 5.00pm ,MANGLORE 5.30PM'
    }
  ]


  Regroute(data:any){
    const url = `${this.mainURL}/Route/`;
    return this.http.post(url, data);
  }

  Regaddmoreroute(data:any){
    const url = `${this.mainURL}/AddmoreRoute_list/`;
    return this.http.post(url, data);
  }

  Exportroute(data:any){
    const url = `${this.mainURL}/Route/`;
    return this.http.post(url, data);
  }

  Updateroute(formData: any, Id: any){
    const url = `${this.mainURL}/Route/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getrouteDetails(){
    const url = `${this.mainURL}/Route/`;
    return this.http.get(url);
  }
}
