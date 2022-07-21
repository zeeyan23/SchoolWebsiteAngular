import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PenaltyurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

  Penalty=[
    {
     student_name:'kavya',
     rollno:'501',
     class:'First' ,
     section:'A',
     penalty:'500',
     penalty_reason:'attendance shortage',
     penalty_remark:'xyaaaa',
     updated_by:'Admin',
     date:'03-03-2021'
    },
    {
      student_name:'sushmitha',
      rollno:'586',
      class:'Eighth' ,
      section:'B',
      penalty:'600',
      penalty_reason:'attendance shortage',
      penalty_remark:'pay as soon as possible',
      updated_by:'Admin',
      date:'03-03-2021'
     },
     {
      student_name:'Dency',
      rollno:'571',
      class:'Seventh' ,
      section:'B',
      penalty:'500',
      penalty_reason:'attendance shortage',
      penalty_remark:'pay fast',
      updated_by:'Admin',
      date:'03-03-2021'
     },
     {
      student_name:'bhoomi',
      rollno:'502',
      class:'First' ,
      section:'A',
      penalty:'500',
      penalty_reason:'attendance shortage',
      penalty_remark:'pay soon',
      updated_by:'Admin',
      date:'03-03-2021'
     },
     {
      student_name:'shivani',
      rollno:'512',
      class:'Second' ,
      section:'C',
      penalty:'750',
      penalty_reason:'attendance shortage',
      penalty_remark:'pay soon',
      updated_by:'Admin',
      date:'03-03-2021'
     },


]

RegPenalty(data:any){
  const url = `${this.mainURL}/Penalty/`;
  return this.http.post(url, data);
}

RegaddmorePenalty(data:any){
  const url = `${this.mainURL}/AddmorePenalty_list/`;
  return this.http.post(url, data);
}

Updatepenalty(formData: any, Id: any){
  const url = `${this.mainURL}/Penalty/${Id}/`;
  return this.http.patch(url, formData);
}


getaddmorepenaltyDetails(){
  const url = `${this.mainURL}/AddmorePenalty_list/`;
  return this.http.get(url);
}


getpenaltyDetails(){
  const url = `${this.mainURL}/Penalty/`;
  return this.http.get(url);
}

deletePenalty(Id :any){
  const url = `${this.mainURL}/Penalty/${Id}/`;
  return this.http.delete(url);
}

}
