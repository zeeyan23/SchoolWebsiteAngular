import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { values } from 'd3-collection';
import { DburlService } from 'src/app/dburl.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  registerSubscriber: any;
  msg: boolean;
  constructor(private _url: DburlService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {}

  addUser(form: NgForm) {
    console.log(form.value);
    const value = form.value;
    const newUser = new User(value.username, value.password, value.email, 'visitor');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.registerSubscriber = this.http
      .post(this._url.url + '/users/', newUser, { headers: headers })
      .subscribe(
        (responseData) => {
          this.router.navigate(['authentication/login']), { relativeTo: this.route };
          console.log(responseData);
        },
        (error) => {
          console.log(error);
          this.msg = true;
        }
      );
  }
}
export class User {
    
  constructor(
      public username: string,
      public password: string,
      public email: string,
      public groups?: string
      ){}
  
}