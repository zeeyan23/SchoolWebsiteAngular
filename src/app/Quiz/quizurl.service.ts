import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuizurlService {

  mainURL: string;
  stdURL: string;

  constructor(private http: HttpClient) {
    this.stdURL = `${environment.serverUrl}`;
    this.mainURL = `${environment.serverUrl}/school`;
  }

  Addquiz(data:any){
    const url = `${this.mainURL}/Quiz/`;
    return this.http.post(url, data);
  }

  Updatequiz(formData: any, Id: any){
    const url = `${this.mainURL}/Quiz/${Id}/`;
    return this.http.patch(url, formData);
  }

 
  getQuizDetails(){
    const url = `${this.mainURL}/Quiz/`;
    return this.http.get(url);
  }


  deleteQuiz(Id :any){
    const url = `${this.mainURL}/Quiz/${Id}/`;
    return this.http.delete(url);
  }
}
