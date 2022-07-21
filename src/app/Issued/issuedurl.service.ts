import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class IssuedurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 

  Issued=[
    {
      date:'12/03/2021',
      sr_no:'6765',
      admission_no:'45465576',
      accession_no:'45354',
      roll_no:'26465757',
      name:'kavya',
      title:'What is mathemetics',
      author:'Seuss'
    },
    {
      date:'16/03/2021',
      sr_no:'9798',
      admission_no:'98645576',
      accession_no:'88354',
      roll_no:'79765757',
      name:'Ashwitha',
      title:'How To Solve?',
      author:'Seuss'
    },
    {
      date:'20/03/2021',
      sr_no:'7765',
      admission_no:'697979',
      accession_no:'68797',
      roll_no:'346455',
      name:'shaila',
      title:'What is mathemetics',
      author:'Seuss'
    },
    {
      date:'18/03/2021',
      sr_no:'6765',
      admission_no:'454656',
      accession_no:'45354',
      roll_no:'264657',
      name:'Rashmi',
      title:'What is mathemetics',
      author:'Seuss'
    },
    {
      date:'19/03/2021',
      sr_no:'6765',
      admission_no:'45465576',
      accession_no:'45354',
      roll_no:'26465757',
      name:'Nidhi',
      title:'What is mathemetics',
      author:'Seuss'
    },
  ]

  Regissue(data:any){
    const url = `${this.mainURL}/Issued/`;
    return this.http.post(url, data);
  }

  Regaddmoreissue(data:any){
    const url = `${this.mainURL}/AddmoreIssued_list/`;
    return this.http.post(url, data);
  }

  Updateissue(formData: any, Id: any){
    const url = `${this.mainURL}/Issued/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getissueDetails(){
    const url = `${this.mainURL}/Issued/`;
    return this.http.get(url);
  }

}
