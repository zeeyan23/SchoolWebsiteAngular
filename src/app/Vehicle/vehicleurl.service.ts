import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Vehicle=[
    {
      regno :"23456",
      type:"Omni",
      Regown:'sam',
      makers_class:'Maruthi Suzuki',
      seating_cap:'10',
      hypoth:'bank',
      fitnessval:'12-03-2025'

    },
    {
      regno :"23452",
      type:"Bus",
      Regown:'John',
      makers_class:'TVS',
      seating_cap:'50',
      hypoth:'no',
      fitnessval:'16-07-2028'

    },
    {
      regno :"29868",
      type:"Auto",
      Regown:'peter',
      makers_class:'Mahindra',
      seating_cap:'5',
      hypoth:'no',
      fitnessval:'19-08-2030'

    },
    {
      regno :"78657",
      type:"Bus",
      Regown:'ram',
      makers_class:'TVS',
      seating_cap:'50',
      hypoth:'bank',
      fitnessval:'25-03-2025'

    },
    {
      regno :"80087",
      type:"Omni",
      Regown:'shyaam',
      makers_class:'Maruthi Suzuki',
      seating_cap:'10',
      hypoth:'bank',
      fitnessval:'18-03-2027'

    }

  ]

  Regvehicle(data:any){
    const url = `${this.mainURL}/Vehicle/`;
    return this.http.post(url, data);
  }

  Regaddmorevehicle(data:any){
    const url = `${this.mainURL}/AddmoreVehicle_list/`;
    return this.http.post(url, data);
  }

  Exportvehicle(data:any){
    const url = `${this.mainURL}/Vehicle/`;
    return this.http.post(url, data);
  }

  Updatevehicle(formData: any, Id: any){
    const url = `${this.mainURL}/Vehicle/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getvehicleDetails(){
    const url = `${this.mainURL}/Vehicle/`;
    return this.http.get(url);
  }


  getaddmorevehicleDetails(){
    const url = `${this.mainURL}/AddmoreVehicle_list/`;
    return this.http.get(url);
  }
}
