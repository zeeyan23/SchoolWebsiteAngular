import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CalenderurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

// data=[
//   {startdate:'2021-11-15',
//   enddate:'2021-11-16',
//   titlee:'Halloween Holiday'
// },
// {startdate:'2021-11-16',
// enddate:'2021-11-17',
// titlee:'Halloween Holiday'
// },
// {startdate:'2021-11-17',
// enddate:'2021-11-17',
// titlee:'Halloween Holiday'
// }
// ]



Regcalendar(data:any){
  let headers = new HttpHeaders({
    // 'Content-Type': 'application/json',
    'Authorization': 'Token ' + localStorage.getItem('token')
  });
  const url = `${this.mainURL}/Calendar/`;
  return this.http.post(url, data, { headers: headers });
}

Updatecal(formData: any, Id: any){
  const url = `${this.mainURL}/Calendar/${Id}/`;
  return this.http.patch(url, formData);
}


getcalendarDetails(){
  const url = `${this.mainURL}/Calendar/`;
  return this.http.get(url);
}
deleteCalendar(Id :any){
  const url = `${this.mainURL}/Calendar/${Id}/`;
  return this.http.delete(url);
}

}
