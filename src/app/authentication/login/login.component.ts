import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DburlService } from '../../dburl.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {
 
  @ViewChild('f') loginsForm: NgForm;
  loginSubscriber: any;
  msg: boolean;
  isLoggedIn: boolean;
  constructor(private http: HttpClient,
    private _url: DburlService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
     
     }

  loginform = true;
  recoverform = false;

  
  showRecoverForm() {
    this.loginform = !this.loginform;
    this.recoverform = !this.recoverform;
  }

  onLogin(form: NgForm) {
   
    const value = form.value;
    console.log(value);
    
    
    const user = { username: value.username, password: value.password };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.loginSubscriber = this.http
      .post(this._url.url + '/api-token-auth/', user, { headers: headers })
      .subscribe(
        (responseData:any) => {
          localStorage.setItem('token', responseData.token);
          localStorage.setItem('user', user.username);
          localStorage.setItem('group', responseData.groups);
          localStorage.setItem('id', responseData.user_id);

         
          
          this.router.navigate(['/dashboard/dashboard1']);
          
        },
        (error) => {
          console.log('error', error);
          this.msg = true;
        }
      );
    form.reset();

   
  }
}

