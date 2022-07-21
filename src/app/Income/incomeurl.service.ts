import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs/internal/observable/of';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IncomeurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

  Income=[
    {
      total_fee:'100000',
      total_expense:'6000',
      total_Due:'50000',
      class:'First',
      section:'A',
      Date:'06-03-2021',
      penalty:'32000',
      academic_year:'2021'
   },
   {
    total_fee:'110000',
    total_expense:'5000',
    total_Due:'30000',
    class:'First',
    section:'B',
    Date:'06-03-2021',
    penalty:'26000',
    academic_year:'2020'
 },
 {
  total_fee:'130000',
  total_expense:'4000',
  total_Due:'20000',
  class:'Second',
  section:'A',
  Date:'06-03-2021',
  penalty:'21000',
  academic_year:'2019'
},
{
  total_fee:'115000',
  total_expense:'3500',
  total_Due:'10000',
  class:'Second',
  section:'B',
  Date:'06-03-2021',
  penalty:'35000',
  academic_year:'2018'
},
{
  total_fee:'155000',
  total_expense:'5500',
  total_Due:'25000',
  class:'Third',
  section:'A',
  Date:'06-03-2021',
  penalty:'37000',
  academic_year:'2017'
}
  ]

  Funds=[
    {
      first_name:'Kirthan',
      second_name:'suvarna',
      phone:4356677754,
      amount:'50000',
      message:'xyzzz'
    },
    {
      first_name:'Shravan',
      second_name:'shetty',
      phone:9856677754,
      amount:'30000',
      message:'abccc'
    },
    {
      first_name:'shravya',
      second_name:'rao',
      phone:7876567876,
      amount:'20000',
      message:'jlkk'
    },
    {
      first_name:'harshitha',
      second_name:'suvarna',
      phone:9987767665,
      amount:'45000',
      message:'xhhdsz'
    },
    {
      first_name:'prathvi',
      second_name:'shriyan',
      phone:87664556767,
      amount:'50000',
      message:'xyzzz'
    }
    
  ]

  getConsumuriSiDataForShipById(shipId) {
    return of([{
  
      "income": 120000, 
      "year": 2019
    },
    {
      "income": 130000, 
      "year": 2020
    },
    {
      "income": 140000,
       "year": 2021
    },
    {
      "income": 150000, 
      "year": 2022
    }
    ]);
  }

  Regfund(data:any){
    const url = `${this.mainURL}/Fund/`;
    return this.http.post(url, data);
  }

  Regaddmorefund(data:any){
    const url = `${this.mainURL}/AddmoreFund_list/`;
    return this.http.post(url, data);
  }

  Updatefund(formData: any, Id: any){
    const url = `${this.mainURL}/Fund/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getfundDetails(){
    const url = `${this.mainURL}/Fund/`;
    return this.http.get(url);
  }

  getaddmorefundDetails(){
    const url = `${this.mainURL}/AddmoreFund_list/`;
    return this.http.get(url);
  }
    



}
