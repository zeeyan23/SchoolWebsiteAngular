import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeworkurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 
  public Savehomwwork(homeworkdata) {  
    console.log("Class Name : " + homeworkdata.class_name);  
    console.log("Section : " + homeworkdata.section);  
    console.log(homeworkdata);  
    this.Homework.push(homeworkdata)
 } 

  Homework=[
    {
      class_name:'First',
      section:'A',
      subject:'Maths',
      homework:'Add two Numbers 230 and 467',
      homework_date:'15-04-2021',
      remark:'put your own numbers and do addition more',
      dos:'15-04-2021',
      updatedby: 'mary',
      homework_photo:'https://cdn1.byjus.com/wp-content/uploads/2019/11/single-digit-addition-worksheet.png'
    },
    {
      class_name:'Second',
      section:'A',
      subject:'Science',
      homework:'write the names of flowers',
      homework_date:'15-04-2021',
      remark:'write atleast 20',
      dos:'15-04-2021',
      updatedby: 'Sumana',
      homework_photo:'https://ecdn.teacherspayteachers.com/thumbitem/Science-worksheet-Life-cycle-of-a-butterfly-5307924-1583573991/original-5307924-1.jpg'
    },
    {
      class_name:'Third',
      section:'B',
      subject:'Computer',
      homework:'What is computer? List input and output devices.',
      homework_date:'15-04-2021',
      remark:'',
      dos:'15-04-2021',
      updatedby: 'Yashaswini',
      homework_photo:''
      
    },
    {
      class_name:'Fourth',
      section:'A',
      subject:'English',
      homework:'list Vowels and consonents',
      homework_date:'15-04-2021',
      remark:'write the sentence',
      dos:'15-04-2021',
      updatedby: 'Rashmitha',
      homework_photo:''
      
    },
    {
      class_name:'Fifth',
      section:'B',
      subject:'English',
      homework:'list Vowels and consonents',
      homework_date:'15-04-2021',
      remark:'write the sentence',
      dos:'15-04-2021',
      updatedby: 'Harshitha',
      homework_photo:''
    },


  ]
   
  Classwork=[
    {
      class_name:'First',
      section:'A',
      subject:'Maths',
      classwork:'Add two Numbers 230 and 467',
      classwork_date:'15-04-2021',
      remark:'put your own numbers and do addition more',
      updatedby: 'mary'
     
    },
    {
      class_name:'Second',
      section:'A',
      subject:'Science',
      homework:'write the names of flowers',
      classwork_date:'15-04-2021',
      remark:'write atleast 20',
      updatedby: 'Sumana'
      
    },
    {
      class_name:'Third',
      section:'B',
      subject:'Computer',
      homework:'What is computer? List input and output devices.',
      classwork_date:'15-04-2021',
      remark:'',
      updatedby: 'Yashaswini',
     
      
    },
    {
      class_name:'Fourth',
      section:'A',
      subject:'English',
      homework:'list Vowels and consonents',
      classwork_date:'15-04-2021',
      remark:'write the sentence',
      updatedby: 'Rashmitha',
      
      
    },
    {
      class_name:'Fifth',
      section:'B',
      subject:'English',
      homework:'list Vowels and consonents',
      classwork_date:'15-04-2021',
      remark:'write the sentence',
      updatedby: 'Harshitha',
     
    },
  ]

  Reghomework(data:any){
    const url = `${this.mainURL}/Homework/`;
    return this.http.post(url, data);
  }

  Updatehomework(formData: any, Id: any){
    const url = `${this.mainURL}/Homework/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  gethomeworkDetails(){
    const url = `${this.mainURL}/Homework/`;
    return this.http.get(url);
  }

  deleteHomework(Id :any){
    const url = `${this.mainURL}/Homework/${Id}/`;
    return this.http.delete(url);
  }
}
