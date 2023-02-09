import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffurlService } from '../../shared/services/staffurl.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { User } from 'src/app/authentication/signup/signup.component';
import { DburlService } from 'src/app/dburl.service';


@Component({
  selector: 'app-addstaff',
  templateUrl: './addstaff.component.html',
  styleUrls: ['./addstaff.component.css']
})
export class AddstaffComponent implements OnInit {
  staffForm: UntypedFormGroup;
  imageSrc: string;
  selectedFile: File;
  staffs: any[] = [];
  isDean: boolean;
  public staffies: any[] = [];
  registerSubscriber: any;
  constructor(private fb: UntypedFormBuilder,
     private staffss: StaffurlService,
     private router: Router,
     private http: HttpClient,
     private _url: DburlService,
    private route: ActivatedRoute) {
    
   }

  ngOnInit(): void {
    this.staffForm = this.fb.group({
       
      staff_name:['',Validators.required],
      reg_num: ['',[Validators.required]],
      gender: ['',[Validators.required]],
      age: ['',Validators.required],
      dob: ['',[Validators.required]],
      designation: ['',Validators.required],
      father_name: ['',Validators.required],
      mothers_name: ['',Validators.required],
      phone: ['',Validators.required],
      email: ['',Validators.required],
      qualification: ['',Validators.required],
      doj: ['',Validators.required],
      subject: ['',Validators.required],
      yoe: ['',Validators.required],
      staff_photo: [null],
     fileSource : ['',Validators.required],
    //  staffies: this.fb.array([]) ,
     
    });
    this.getStudentDetails();

    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   
    }
    else{
      this.isDean = false;
    }
  }

   
  newQuantity(): UntypedFormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.staffies.push({
      id: this.staffies.length + 1,
      name: '',
      value: '',
    });
  }

  removeQuantity(i:number) {
    this.staffies.splice(i, 1);
  }
   
   
  get f(){
    return this.staffForm.controls;
  }

  uploadFile(event) {
    

    const reader = new FileReader();
    
    this.selectedFile = <File>event.target.files[0];
      // debugger
      console.log(this.selectedFile);
  }

  getStudentDetails(){
    this.staffss.getStaffDetails().subscribe((res: any) =>{
          console.log(res);
          this.staffs = res;
        });
        
      }
      

submitForm(){
   
  // console.log(this.studentregForm.value);
  const value = this.staffForm.value
  // const value = form.value;
    const newUser = new User( value.staff_name + value.reg_num, value.staff_name + value.reg_num + '@123', value.email, 'staff');
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.registerSubscriber = this.http
      .post(this._url.url + '/users/', newUser, { headers: headers })
      .subscribe(
        (responseData) => {
          // this.router.navigate(['/#/staff/stafflist/']), { relativeTo: this.route };
          // this.staffForm.reset();
          // console.log(responseData);
        
      console.log(value);
      var formData: any = new FormData();
     
      if(this.staffs.filter(({ reg_num }) => reg_num == value.reg_num).length){
        alert("register number already exists!!")
       }
       else{

        formData.append('reg_num', value.reg_num);
       }
       formData.append('user_id', responseData['id']);
       formData.append('staff_name', value.staff_name);
      // formData.append('startedYear', value.startedYear);
      formData.append('gender', value.gender);
      formData.append('age', value.age);
      formData.append('dob', value.dob);
      formData.append('designation', value.designation);
      formData.append('father_name', value.father_name);
      formData.append('mothers_name', value.mothers_name);
      formData.append('phone', value.phone);
      formData.append('email', value.email);
      formData.append('qualification', value.qualification);
      formData.append('doj', value.doj);
      formData.append('subject', value.subject);
      formData.append('yoe', value.yoe);
      if(this.selectedFile == null){
        alert("Please upload Staff photo") 
      }
      formData.append('staff_photo', this.selectedFile, this.selectedFile.name);
      
      console.log(formData);

    
    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */
    
    this.staffss.Regstaff(formData).subscribe((res:any)=>  {
      console.log(res)


      if(this.staffies.length > 0){
        for(let i=0; i<this.staffies.length; i++){    
          const extraData = {
            staff: res.id,
            name: this.staffies[i].name,
            value: this.staffies[i].value,
          };
          console.log('extraadataaa',extraData)

          this.staffss.addmorestaff(extraData).subscribe((res:any)=>  {
            console.log(res)
          
        });
        }
      }
     
      this.successAlertNotification()
      this.staffForm.reset();
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
  },
  (error) => {
    console.log(error);
    this.erroalert();
  }
);
    
  }
  simpleAlert(){
    Swal.fire('Hi! Staff Updated successfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Staff Registered successfully', 'success');
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
