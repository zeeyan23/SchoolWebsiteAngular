import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { HomeworkurlService } from 'src/app/shared/services/homeworkurl.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';
import { ClassurlService } from 'src/app/shared/services/classurl.service';


@Component({
  selector: 'app-addhomework',
  templateUrl: './addhomework.component.html',
  styleUrls: ['./addhomework.component.css']
})
export class AddhomeworkComponent implements OnInit {

  homeworkForm: UntypedFormGroup;
  imageSrc: string;
  selectedFile: any;
  classmemo: any;
  isDean: boolean;
  isStaff: boolean;
  constructor( private fb:UntypedFormBuilder,private homewrk:HomeworkurlService,private router:Router, private clshh :ClassurlService) {
   
   }

  ngOnInit(): void {
    this.homeworkForm= this.fb.group({
       
      class_name:['',Validators.required],
      section: ['',[Validators.required]],
      subject: ['',[Validators.required]],
      homework_date: ['',[Validators.required]],
      due_date: ['', [Validators.required]],
      remark: ['',Validators.required],
      homework_photo: [null],
     fileSource : ['',Validators.required],
     homework: ['',Validators.required]
    
     });
    this.getclassDetails();
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
   if(localStorage.getItem('group') == 'staff' ) {
   
    this.isStaff = true;
 }
 else{
  this.isStaff = false;
 }
  }
      
  get f(){
    return this.homeworkForm.controls;
  }

  getclassDetails(){
    this.clshh.getClassDetails().subscribe((res: any) =>{
          console.log(res);
          this.classmemo = res;
          
        });
        console.log('class',this.classmemo);
        
      }
  uploadFile(event) {
    

    const reader = new FileReader();
    
    this.selectedFile = <File>event.target.files[0];
      // debugger
      console.log(this.selectedFile);
  }

// Savehomwwork(value) {  
//   this.homewrk.Savehomwwork(value);  
//   this.router.navigate(['homework/homeworklist']);
// } 

submitForm(){
   
  // console.log(this.studentregForm.value);
  var value = this.homeworkForm.value
  

  var formData: any = new FormData();
      formData.append('class_name', value.class_name);
      formData.append('section', value.section);
      // formData.append('startedYear', value.startedYear);
      formData.append('subject', value.subject);
      formData.append('homework_date', value.homework_date);
      formData.append('due_date', value.due_date);
      formData.append('remark', value.remark);
      if(this.selectedFile == null){
       formData.append('homework_photo', "");
      }
      else{
      formData.append('homework_photo',this.selectedFile, this.selectedFile.name);
      }
      formData.append('homework', value.homework);
     
      
      console.log(formData);

    
    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */
    
    this.homewrk.Reghomework(formData).subscribe((res:any)=>  {
      console.log(res)
     
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
    Swal.fire('Hi! Homework Updated successfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Homework Added successfully', 'success')
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
