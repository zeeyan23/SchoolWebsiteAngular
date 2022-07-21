import { Classdata } from '../../Class/classdata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClassurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 
   Class=[
     {
      id:'1',
      Maths: true,
      class_name: "First",
      computer: true,
      english: true,
      hindi: true,
      kannada: true,
      pt: true,
      science: true,
      section: "A",
      social_science: true,
      teachers: "Rajanikanth"
     },
     {
      id:'2',
      Maths: true,
      class_name: "Second",
      computer: true,
      english: true,
      hindi: true,
      kannada: true,
      pt: true,
      science: true,
      section: "B",
      social_science: true,
      teachers: "Mamatha"
    },
    {
      id:'3',
      Maths: true,
      class_name: "Third",
      computer: true,
      english: true,
      hindi: true,
      kannada: true,
      pt: true,
      science: true,
      section: "A",
      social_science: true,
      teachers: "Rajeshwari"
    },
    {
      id:'4',
      Maths: true,
      class_name: "Fourth",
      computer: true,
      english: true,
      hindi: true,
      kannada: true,
      pt: true,
      science: true,
      section: "B",
      social_science: true,
      teachers: "Reshma"
    }
   

 /*    {
      class_name:'First',
      section:'c',
      teacher:'Rajkumar',
      Maths:'maths',
     computer:'computer',
     english:'english',
      hindi :'hindi',
     kannada :'kannada',
     pt:'pt',
     science:'science',
     social_science:'social_science'
    },
    {
      class_name:'Second',
      section:'A',
      teacher:'Siddhalingamma',
      Maths:'maths',
     computer:'computer',
     english:'english',
      hindi :'hindi',
     kannada :'kannada',
     pt:'pt',
     science:'science',
     social_science:'social_science'
    },
    {
      class_name:'Second',
      section:'B',
      teacher:'Rajeshwari',
      Maths:'maths',
     computer:'computer',
     english:'english',
      hindi :'hindi',
     kannada :'kannada',
     pt:'pt',
     science:'science',
     social_science:'social_science'
    }
  */   

   ]

   Regclasses(data:any){
    const url = `${this.mainURL}/Studentclass/`;
    return this.http.post(url, data);
  }

  Updateclass(formData: any, Id: any){
    const url = `${this.mainURL}/Studentclass/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getClassDetails(){
    const url = `${this.mainURL}/Studentclass/`;
    return this.http.get(url);
  }

  deleteClass(Id :any){
    const url = `${this.mainURL}/Studentclass/${Id}/`;
    return this.http.delete(url);
  }
}
