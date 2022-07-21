import { Leavedata } from './leavedata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeaveurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

  Leave=[
    {
      user_id:'SCEE5445',
      user_role:'Kavya',
      username:'kavya',
      leave_type:'Sick leave',
      leave_from:'13-03-2021',
      leave_to:'15-03-2021',
      leave_reason:'dfghjkl',
      Status:'Approved'
    },
    {
      user_id:'SCEE5448',
      user_role:'Ashwini',
      username:'kavya',
      leave_type:'Maternity leave ',
      leave_from:'15-03-2021',
      leave_to:'15-09-2021',
      leave_reason:'dfghjkl',
      Status:'Pending'
    },
    
    {
      user_id:'SCEE5455',
      user_role:'Shruthika',
      username:'kavya',
      leave_type:'Sick Leave',
      leave_from:'13-03-2021',
      leave_to:'13-03-2021',
      leave_reason:'dfghjkl',
      Status:'Approved'
    },
    {
      user_id:'SCEE5457',
      user_role:'Pooja',
      username:'kavya',
      leave_type:'casual Leave',
      leave_from:'19-03-2021',
      leave_to:'20-03-2021',
      leave_reason:'dfghjkl',
      Status:'Pending'
    },
    
  ]

  Regleave(data:any){
    const url = `${this.mainURL}/Leave/`;
    return this.http.post(url, data);
  }

  Addmoreleave(data:any){
    const url = `${this.mainURL}/AddmoreLeave_list/`;
    return this.http.post(url, data);
  }

  getaddmoreleaveDetails(){
    const url = `${this.mainURL}/AddmoreLeave_list/`;
    return this.http.get(url);
  }

  Updateleave(formData: any, Id: any){
    const url = `${this.mainURL}/Leave/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getleaveDetails(){
    const url = `${this.mainURL}/Leave/`;
    return this.http.get(url);
  }

  deleteLeave(Id :any){
    const url = `${this.mainURL}/Leave/${Id}/`;
    return this.http.delete(url);
  }
}
