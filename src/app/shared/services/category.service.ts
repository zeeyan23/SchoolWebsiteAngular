import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  } 


  Regcategory(data:any){
    const url = `${this.mainURL}/Category/`;
    return this.http.post(url, data);
  }

  Updatefee(formData: any, Id: any){
    const url = `${this.mainURL}/Category/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getfeeDetails(){
    const url = `${this.mainURL}/Category/`;
    return this.http.get(url);
  }
    

}
