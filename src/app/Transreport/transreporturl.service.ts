import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TransreporturlService {
  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Studentrepo=[
    {
      regno:'501',
      name:'kavyas',
      gender:'Female',
      class:'First',
      mobile:'7656798435',
      vehicleno:'KA 20 P 6848',
      type:'Bus',
      driver_name :'sam',
      emp_mobile:'9876787654',
      route_name:'UDP-JUNCTION',
      stop_name:'Malpe 4.30pm'
    },
    {
      regno:'502',
      name:'Aswitha',
      gender:'Female',
      class:'Second',
      mobile:'7656798876',
      vehicleno:'KA 20 P 6547',
      type:'Bus',
      driver_name :'john',
      emp_mobile:'9876787678',
      route_name:'UDP-JUNCTION',
      stop_name:'Kumbashi 4.30pm'
    },
    {
      regno:'503',
      name:'shyla',
      gender:'Female',
      class:'Third',
      mobile:'7656799843',
      vehicleno:'KA 20 P 8976',
      type:'Bus',
      driver_name :'peter',
      emp_mobile:'9876787543',
      route_name:'UDP-JUNCTION',
      stop_name:'Udupi 4.00pm'
    },
    {
      regno:'504',
      name:'Rashmi',
      gender:'Female',
      class:'Fourth',
      mobile:'8976897656',
      vehicleno:'KA 20 P 6848',
      type:'Bus',
      driver_name :'sam',
      emp_mobile:'9876787654',
      route_name:'UDP-JUNCTION',
      stop_name:'Eswarnagar 4.05pm'
    },
    {
      regno:'505',
      name:'Nidisha',
      gender:'Female',
      class:'Fifth',
      mobile:'8756787654',
      vehicleno:'KA 20 P 8975',
      type:'Bus',
      driver_name :'salvin',
      emp_mobile:'787654563',
      route_name:'UDP-JUNCTION',
      stop_name:'Ucchila 4.45pm'
    },

  ]

  Staffrepo=[
    {
      saff_id:'1',
      name:'kushi',
      gender:'female',
      mobile:'8765646765',
      vehicle_no:'KA 20 P 5646',
      type:'bus',
      driver:'sam',
      emp_mob:'9876754567',
      route_name:'MANIPAL-CIRCLE',
      stop_name:'Surathkal',
      Amount:"1540"
    },
    {
      saff_id:'2',
      name:'payal',
      gender:'female',
      mobile:'8765646765',
      vehicle_no:'KA 20 P 5646',
      type:'bus',
      driver:'sam',
      emp_mob:'9876754567',
      route_name:'MANIPAL-CIRCLE',
      stop_name:'Surathkal',
      Amount:"1540"
    },
    {
      saff_id:'3',
      name:'pavithra',
      gender:'female',
      mobile:'8765646765',
      vehicle_no:'KA 20 P 5646',
      type:'bus',
      driver:'sam',
      emp_mob:'9876754567',
      route_name:'MANIPAL-CIRCLE',
      stop_name:'Surathkal',
      Amount:"1540"
    },
    {
      saff_id:'4',
      name:'kiran',
      gender:'male',
      mobile:'8765646765',
      vehicle_no:'KA 20 P 5646',
      type:'bus',
      driver:'sam',
      emp_mob:'9876754567',
      route_name:'MANIPAL-CIRCLE',
      stop_name:'Surathkal',
      Amount:"1540"
    },
    {
      saff_id:'1',
      name:'rahul',
      gender:'male',
      mobile:'8765646765',
      vehicle_no:'KA 20 P 5646',
      type:'bus',
      driver:'sam',
      emp_mob:'9876754567',
      route_name:'MANIPAL-CIRCLE',
      stop_name:'Surathkal',
      Amount:"1540"
    },

  ]

  Regtransrepo(data:any,reg_number: any){
    const url = `${this.mainURL}/Transportreport/${reg_number}/`;
    return this.http.post(url, data);
  }

  Updatetransrepo(formData: any, Id: any){
    const url = `${this.mainURL}/Transportreport/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  gettransrepoDetails(){
    const url = `${this.mainURL}/Transportreport/`;
    return this.http.get(url);
  }

  deletetransrepo(Id :any){
    const url = `${this.mainURL}/Transportreport/${Id}/`;
    return this.http.delete(url);
  }

}
