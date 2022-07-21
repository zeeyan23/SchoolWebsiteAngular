import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalaryurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

  Salary=[
    {

     name:'mary',
     contact_number:'6567876567',
     designation:'Teacher',
     date:'06-03-2021',
     yoe:'1 year',
     amount:'35000',
     amount_balance:'5000',
     remark:'balance left',
     advance_amount:'5000',
     payment_mode:'Net banking'
 },
 {

  name:'laxmi',
  contact_number:'6567908432',
  designation:'Staff',
  date:'05-03-2021',
  yoe:'3 year',
  amount:'10000',
  amount_balance:'0',
  remark:'full balance',
  advance_amount:'5000',
  payment_mode:'cash'
},
{

  name:'pooja',
  contact_number:'6567908498',
  designation:'Teacher',
  date:'05-03-2021',
  yoe:'4 years',
  amount:'40000',
  amount_balance:'0',
  remark:'full balance',
  advance_amount:'',
  payment_mode:'Net Banking'
},
{

  name:'Amrutha',
  contact_number:'8567908432',
  designation:'Staff',
  date:'07-03-2021',
  yoe:'2 years',
  amount:'10000',
  amount_balance:'0',
  remark:'balance left',
  advance_amount:'',
  payment_mode:'cash'
},
{

  name:'john',
  contact_number:'8567908432',
  designation:'Staff',
  date:'06-03-2021',
  yoe:'1 year',
  amount:'10000',
  amount_balance:'0',
  remark:'balance left',
  advance_amount:'',
  payment_mode:'cash'
},


]

Advance=[
  {

   name:'mary',
   contact_number:'6567876567',
   designation:'Teacher',
   date:'06-03-2021',
   advance_amount:'35000',
   advance_amount_balance:'5000',
   remark:'balance left',
   payment_mode:'Net banking'
},
{

name:'laxmi',
contact_number:'6567908432',
designation:'Staff',
date:'05-03-2021',
advance_amount:'10000',
advance_amount_balance:'0',
remark:'full balance',
payment_mode:'cash'
},
{

name:'pooja',
contact_number:'6567908498',
designation:'Teacher',
date:'05-03-2021',
advance_amount:'40000',
advance_amount_balance:'0',
remark:'full balance',
payment_mode:'Net Banking'
},
{

name:'Amrutha',
contact_number:'8567908432',
designation:'Staff',
date:'07-03-2021',
advance_amount:'10000',
advance_amount_balance:'0',
remark:'balance left',
payment_mode:'cash'
},
{

name:'john',
contact_number:'8567908432',
designation:'Staff',
date:'06-03-2021',
advance_amount:'10000',
advance_amount_balance:'0',
remark:'balance left',
payment_mode:'cash'
},


]

Regsalary(data:any){
  const url = `${this.mainURL}/Salary/`;
  return this.http.post(url, data);
}

Regaddmoresalary(data:any){
  const url = `${this.mainURL}/AddmoreSalary_list/`;
  return this.http.post(url, data);
}

Updatesalary(formData: any, Id: any){
  const url = `${this.mainURL}/Salary/${Id}/`;
  return this.http.patch(url, formData);
}


getsalaryDetails(){
  const url = `${this.mainURL}/Salary/`;
  return this.http.get(url);
}

getaddmoresalaryDetails(){
  const url = `${this.mainURL}/AddmoreSalary_list/`;
  return this.http.get(url);
}
}
