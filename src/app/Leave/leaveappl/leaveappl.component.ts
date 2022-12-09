import { LeaveurlService } from './../leaveurl.service';
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: "app-leaveappl",
  templateUrl: "./leaveappl.component.html",
  styleUrls: ["./leaveappl.component.css"],
})
export class LeaveapplComponent implements OnInit {
  leaveForm: FormGroup;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  username: string;
  userid: string;
  usergroup: string;
  public leaves: any[] = [];
  constructor(private fb: FormBuilder,private leaveserve :LeaveurlService) {
   
  }

  ngOnInit(): void {
    this.leaveForm = this.fb.group({
      user_num: ["", Validators.required],
      user_role: ["", [Validators.required]],
      username: ["", Validators.required],
      email :[" ",Validators.required],
      leave_type: ["", [Validators.required]],
      leave_form: ["", Validators.required],
      leave_to: ["", [Validators.required]],
      leave_reason: ["", [Validators.required]],
      leave_status:  ["", [Validators.required]],
      // leaves: this.fb.array([]),
    });

    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
   if( localStorage.getItem('group') == 'staff') {
    this.isStaff = true;
 }
 else{
  this.isStaff = false;
 }
 if(localStorage.getItem('group') == 'parents') {

  this.isParent =true;
}
else{
this.isParent =false;
}

var username = localStorage.getItem('user');
console.log(username) ;
this.username = username;
var userid = localStorage.getItem('id');
console.log(userid) ;
this.userid = userid;
var usergroup = localStorage.getItem('group');
console.log(usergroup) ;
this.usergroup = usergroup;
  }


  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.leaves.push({
      id: this.leaves.length + 1,
      name: '',
      value: '',
    });
  }

  removeQuantity(i:number) {
    this.leaves.splice(i, 1);
  }
  onSubmit() {
    var value = this.leaveForm.value
  

    var formData: any = new FormData();
        formData.append('user_num', value.user_num);
        formData.append('user_role', value.user_role);
        formData.append('username', value.username);
        formData.append('email', value.email);
        formData.append('leave_type', value.leave_type);
        formData.append('leave_form', value.leave_form);
        formData.append('leave_to', value.leave_to);
        formData.append('leave_reason', value.leave_reason);
        formData.append('leave_status', value.leave_status);
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.leaveserve.Regleave(formData).subscribe((res:any)=>  {
        console.log(res)

        if(this.leaves.length > 0){
          for(let i=0; i<this.leaves.length; i++){    
            const extraData = {
              leave: res.id,
              name: this.leaves[i].name,
              value: this.leaves[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.leaveserve.Addmoreleave(extraData).subscribe((res:any)=>  {
              console.log(res)
            
          });
          }
        }
       
       
        this.successAlertNotification()
        // this.success = true;
        // this.errMsg = false;
        // this.showForm = false;
        // this.showContact = false;
        // this.router.navigate(['student/studentdetails']);
        
      },(error:HttpErrorResponse)=>{
        this.erroalert();
        console.log(error);
        // this.success = false;
        // this.errMsg = true;
        // this.showForm = false;
        // this.showContact = false;
       
        
      });
  }

  simpleAlert(){
    Swal.fire('Hi ! Leave Updated successfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Leave application Sent successfully', 'success')
  }
  
  alertConfirmation(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Action cannot be rollback.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think again'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Done!',
          'Action performed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Performed action record present in cloud and databstore.)',
          'error'
        )
      }
    })
  } 

  erroalert()  
  {  
    Swal.fire({  
      icon: 'error',  
      title: 'Oops...',  
      text: 'Something went wrong!',  
      // footer: '<a href>Why do I have this issue?</a>'  
    })  
  } 
 


}
