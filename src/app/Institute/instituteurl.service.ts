import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InstituteurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Institute=[
    { 
      instiname: "Kinara School",
    founder: "xyz",
    // affiliation_name:"CBSE" ,
    startedYear:"2021-11-15 01:35:00",
    address:"abc",
    // short_code: "as345",
    city:'udupi',
    // email: "kinara@gmail.com",
    // alternate_email: "kinaraalter@gmail.com",
    // landline_no: "234567",
    // contact_number: "6787656789",
    state:'karnataka',
    country:'india',
    instituteLogo: '../assets/images/kinara_school_yermal.png'
      
  }
  ]

  Reginstitute(data:any){
    const url = `${this.mainURL}/Institute/`;
    return this.http.post(url, data);
  }

  Addmoreinstitutedata(data:any){
    const url = `${this.mainURL}/AddmoreInstitute_list/`;
    return this.http.post(url, data);
  }

  getaddmoreInstitutionDetails(){
    
    const url = `${this.mainURL}/AddmoreInstitute_list/`;
    return this.http.get(url);
  }

  Updateinstitute(formData: any, Id: any){
    const url = `${this.mainURL}/Institute/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getInstitutionDetails(){
    
    const url = `${this.mainURL}/Institute/`;
    return this.http.get(url);
  }

  getallcountDetails(){
    
    const url = `${this.mainURL}/getAllCount/`;
    return this.http.get(url);
  }

 
}
