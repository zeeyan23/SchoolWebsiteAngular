import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExpenseurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Expense=[
    {
      id:1,
      expense_name:'Teachers Salary',
      amount:'25000',
      date_of_expense:'04-03-2021',
      payment_mode:'cash'


    },
    {
      id:2,
      expense_name:'Daily Expense',
      amount:'3000',
      date_of_expense:'02-03-2021',
      payment_mode:'cash'


    },
    {
      id:3,
      expense_name:'Class Expense',
      amount:'2500',
      date_of_expense:'03-03-2021',
      payment_mode:'cheque'


    },
    {
      id:4,
      expense_name:'Purchase',
      amount:'35000',
      date_of_expense:'01-03-2021',
      payment_mode:'Net Banking'


    },
    {
      id:5,
      expense_name:'Class Expense',
      amount:'2000',
      date_of_expense:'05-03-2021',
      payment_mode:'cash'


    }

  ];

  Regexpense(data:any){
    const url = `${this.mainURL}/Expense/`;
    return this.http.post(url, data);
  }

  Regaddmoreexpense(data:any){
    const url = `${this.mainURL}/AddmoreExpense_list/`;
    return this.http.post(url, data);
  }

  Updatexpense(formData: any, Id: any){
    const url = `${this.mainURL}/Expense/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getExpenseDetails(){
    const url = `${this.mainURL}/Expense/`;
    return this.http.get(url);
  }

  getaddmoreExpenseDetails(){
    const url = `${this.mainURL}/AddmoreExpense_list/`;
    return this.http.get(url);
  }
}
