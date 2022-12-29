import { Feedata } from '../../Fee/feedata';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FeeurlService {
  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 
  public Savefees(feesdata) {  
    console.log("Class Name : " + feesdata.class_name);  
    console.log("Academic Year : " + feesdata.academic_year);  
    console.log(feesdata);  
    this.Fees.push(feesdata)
 } 
 public Savecat(catdata) {  
  console.log("category : " + catdata.category);  
  console.log("Percentage : " + catdata.Percentage);  
  console.log(catdata);  
  this.Fees.push(catdata)
}

  Fees = [
    {
      _id:1,
      academic_year: "2020",
      admission_fee: "200",
      class_name: "First",
      computer_fee: "300",
      exam_fee: "600",
      food_fee: "200",
      hostel_fee: "100",
      misc_fee: "500",
      transport_fee: "670",
      tuition_fee: "900",
      total_fee: null
      
    },
    {
      _id:2,
      academic_year: "2019",
      admission_fee: "300",
      class_name: "Second",
      computer_fee: "450",
      exam_fee: "600",
      food_fee: "543",
      hostel_fee: "670",
      misc_fee: "450",
      transport_fee: "450",
      tuition_fee: "850",
      total_fee:null

      
    },
    {
      _id:3,
      academic_year: "2018",
      admission_fee: "800",
      class_name: "Third",
      computer_fee: "800",
      exam_fee: "450",
      food_fee: "350",
      hostel_fee: "450",
      misc_fee: "500",
      transport_fee: "370",
      tuition_fee: "200",
      total_fee:null
      
    },
    {
      _id:4,
      academic_year: "2015",
      admission_fee: "560",
      class_name: "Fourth",
      computer_fee: "700",
      exam_fee: "500",
      food_fee: "540",
      hostel_fee: "540",
      misc_fee: "340",
      transport_fee: "200",
      tuition_fee: "250",
      total_fee:null
      
    },
    {
      _id:5,
      academic_year: "2014",
      admission_fee: "750",
      class_name: "Fifth",
      computer_fee: "800",
      exam_fee: "600",
      food_fee: "500",
      hostel_fee: "460",
      misc_fee: "350",
      transport_fee: "400",
      tuition_fee: "200",
      total_fee:null
      
    },
   

  ];

  Bill = [
    {
      category:'ST',
      percentage:50
    },
    {
      category:'SC',
      percentage:20
    },
    {
      category:'C-1',
      percentage:40
    },
    {
      category:'2A',
      percentage:30
    }
   
  ];
  
  Regfee(data:any){
    const url = `${this.mainURL}/Fee/`;
    return this.http.post(url, data);
  }

  Regaddmorefee(data:any){
    const url = `${this.mainURL}/AddmoreFee_list/`;
    return this.http.post(url, data);
  }


  getaddmorefeeDetails(){
    const url = `${this.mainURL}/AddmoreFee_list/`;
    return this.http.get(url);
  }
  

  Updatefee(formData: any, Id: any){
    const url = `${this.mainURL}/Fee/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getfeeDetails(){
    const url = `${this.mainURL}/Fee/`;
    return this.http.get(url);
  }


    


}
