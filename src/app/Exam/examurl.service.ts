import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Exam=[
    {
    exam_name:'First unit test',
    start_date:'10-01-2022',
    end_date:'12-01-2022',
    Total_marks:'25',
    hour:'1hr',
    class:'first,second,third,fourth,fifth'
  },
  {
    exam_name:'Second unit test',
    start_date:'10-02-2022',
    end_date:'12-02-2022',
    Total_marks:'25',
    hour:'1hr',
    class:'first,second,third,fourth,fifth'
  },
  {
    exam_name:'Third unit test',
    start_date:'10-03-2022',
    end_date:'12-03-2022',
    Total_marks:'25',
    hour:'1hr',
    class:'first,second,third,fourth,fifth'
  },
  

]

Mark=[
  {
    student_name:'kavya' ,
    maths_total:'100',
    english_total:'90',
    science_total:'80',
    hindi_total:'70',
    social_total:'60',
    kannada_total:'50',
    computer_total:'40'
},
{
  student_name:'nidhi' ,
  maths_total:'100',
  english_total:'90',
  science_total:'80',
  hindi_total:'70',
  social_total:'60',
  kannada_total:'50',
  computer_total:'40'
},
{
  student_name:'ashwitha' ,
  maths_total:'100',
  english_total:'90',
  science_total:'80',
  hindi_total:'70',
  social_total:'60',
  kannada_total:'50',
  computer_total:'40'
},
{
  student_name:'rahul' ,
  maths_total:'100',
  english_total:'90',
  science_total:'80',
  hindi_total:'70',
  social_total:'60',
  kannada_total:'50',
  computer_total:'40'
},
]
Regexam(data:any){
  const url = `${this.mainURL}/Exam/`;
  return this.http.post(url, data);
}

Regaddmoreexam(data:any){
  const url = `${this.mainURL}/AddmoreExam_list/`;
  return this.http.post(url, data);
}

Updatexam(formData: any, Id: any){
  const url = `${this.mainURL}/Exam/${Id}/`;
  return this.http.patch(url, formData);
}


getexamDetails(){
  const url = `${this.mainURL}/Exam/`;
  return this.http.get(url);
}


getaddmoreexamDetails(){
  const url = `${this.mainURL}/AddmoreExam_list/`;
  return this.http.get(url);
}

getexambyidDetails(Id){
  const url = `${this.mainURL}/Exam/${Id}/`;
  return this.http.get(url);
}



Regmark(data:any){
  const url = `${this.mainURL}/Marksheet/`;
  return this.http.post(url, data);
}

Regaddmoremark(data:any){
  const url = `${this.mainURL}/AddmoreMarksheet_list/`;
  return this.http.post(url, data);
}

Updatemark(formData: any, Id: any){
  const url = `${this.mainURL}/Marksheet/${Id}/`;
  return this.http.patch(url, formData);
}


getmarkDetails(){
  const url = `${this.mainURL}/Marksheet/`;
  return this.http.get(url);
}

getaddmoremarkDetails(){
  const url = `${this.mainURL}/AddmoreMarksheet_list/`;
  return this.http.get(url);
}

getmarkbyid(Id){
  const url = `${this.mainURL}/Marksheet/${Id}/`;
  return this.http.get(url);
}
  

}
