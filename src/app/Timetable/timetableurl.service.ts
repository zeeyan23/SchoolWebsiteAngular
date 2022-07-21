import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimetableurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

    public Savetimetable(studentdata) {  
    console.log("Regno : " + studentdata.class_name);  
    console.log("student name : " + studentdata.section);  
    console.log(studentdata);  
    this.Timetable.push(studentdata)
 }  

  Timetable= [
    {
    class_name:'First',
    section:'A',
    timetable_date:'16-04-2021',
    periods:[
      {
        from_time:'8.30am',
        to_time:'9.30m',
        monday:'Maths',
        tuesday:'Sceince',
        wednesday:'social',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      },
      {
        from_time:'9.30am',
        to_time:'10.30m',
        monday:'Maths',
        tuesday:'Social',
        wednesday:'sceince',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      },
      {
        from_time:'11.30am',
        to_time:'12.30m',
        monday:'Maths',
        tuesday:'Sceince',
        wednesday:'social',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      },
      {
        from_time:'12.30pm',
        to_time:'1.30pm',
        monday:'Maths',
        tuesday:'Sceince',
        wednesday:'social',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      },
      {
        from_time:'2.30pm',
        to_time:'3.30pm',
        monday:'Maths',
        tuesday:'Sceince',
        wednesday:'social',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      },
      {
        from_time:'3.30am',
        to_time:'4.30m',
        monday:'Maths',
        tuesday:'Sceince',
        wednesday:'social',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      },
      {
        from_time:'4.30am',
        to_time:'5.30m',
        monday:'Maths',
        tuesday:'Sceince',
        wednesday:'social',
        thursday:'kannada',
        friday:'english',
        saturday:'hindi'
      }
  

    ]
  },
  // {
  //   class:'Second',
  //   section:'B',
  //   date:'16-04-2021',
  //   tablelist:[
  //     {
  //       from_time:'10.30am',
  //       to_time:'9.30m',
  //       monday:'Maths',
  //       tuesday:'Sceince',
  //       wednesday:'social',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     },
  //     {
  //       from_time:'11.30am',
  //       to_time:'10.30m',
  //       monday:'Maths',
  //       tuesday:'Social',
  //       wednesday:'sceince',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     },
  //     {
  //       from_time:'12.30am',
  //       to_time:'12.30m',
  //       monday:'Maths',
  //       tuesday:'Sceince',
  //       wednesday:'social',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     },
  //     {
  //       from_time:'01.30pm',
  //       to_time:'1.30pm',
  //       monday:'Maths',
  //       tuesday:'Sceince',
  //       wednesday:'social',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     },
  //     {
  //       from_time:'02.30pm',
  //       to_time:'3.30pm',
  //       monday:'Maths',
  //       tuesday:'Sceince',
  //       wednesday:'social',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     },
  //     {
  //       from_time:'03.30am',
  //       to_time:'4.30m',
  //       monday:'Maths',
  //       tuesday:'Sceince',
  //       wednesday:'social',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     },
  //     {
  //       from_time:'4.30am',
  //       to_time:'5.30m',
  //       monday:'Maths',
  //       tuesday:'Sceince',
  //       wednesday:'social',
  //       thursday:'kannada',
  //       friday:'english',
  //       saturday:'hindi'
  //     }
  

  //   ]
  // },


  ]


  Regtimetable(data:any){
    const url = `${this.mainURL}/Timetable/`;
    return this.http.post(url, data);
  }

  Regaddmoretimetable(data:any){
    const url = `${this.mainURL}/AddmoreTimetable_list/`;
    return this.http.post(url, data);
  }

  Updatetimetable(formData: any, Id: any){
    const url = `${this.mainURL}/Timetable/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  gettimetableDetails(){
    const url = `${this.mainURL}/Timetable/`;
    return this.http.get(url);
  }

  getbothtimetableDetails(){
    const url = `${this.mainURL}/getfromtwo/`;
    return this.http.get(url);
  }


  // getaddmorebyidtimetableDetails(Id){
  //   const url = `${this.mainURL}/AddmoreTimetable_list/${Id}/`;
  //   return this.http.get(url);
  // }
  getaddmoretimetableDetails(){
    const url = `${this.mainURL}/AddmoreTimetable_list/`;
    return this.http.get(url);
  }


}
