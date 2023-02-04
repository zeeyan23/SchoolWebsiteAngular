import { ClassurlService } from '../../shared/services/classurl.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StaffurlService } from 'src/app/shared/services/staffurl.service';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.css']
})
export class AddclassComponent implements OnInit {

  classForm: UntypedFormGroup;
  staffmemo: any[] = [];
  staffs: any;
  isDean: boolean;

 
  constructor(private fb:UntypedFormBuilder ,private clshh:ClassurlService, private router: Router,
    private staffService: StaffurlService
    ) {
   
   }
  //  dropDownOptions = ["Vijayalaxmi",
  //   "Kirthan Suvarna",
  //   "Rajkumar",
  //   "Siddhalingamma",
  //   "Rajeshwari",
  //   "Mamatha",
  //   "Reshma",
  //   "Udhay Kumar",
  //   "Ganesh",
  //   "Babu Rao",
  //   "Akshay Pai",
  //   "Vignesh shetty",
  //   "Rajanikanth",
  //   ];

  ngOnInit(): void {
    
    this.classForm = this.fb.group({
       
      class_name:['',Validators.required],
      section: ['',[Validators.required]],
      english:[''],
      hindi:[''],
      kannada:[''],
      Maths:[''],
      science:[''],
      social_science:[''],
      computer:[''],
      pt:[''],
      drawing: [''],
      evs: [''],
      lib: [''],
      gk: [''],
      teachers:['',[Validators.required]]
     
    });
    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
    this.getStaffDetails();
  }
  
  
  submitForm(){
    var value = this.classForm.value
    var formData: any = new FormData();
        formData.append('class_name', value.class_name);
        formData.append('section', value.section);
        // formData.append('startedYear', value.startedYear);
        formData.append('english', value.english);
        formData.append('hindi', value.hindi);
        formData.append('kannada', value.kannada);
        formData.append('Maths', value.Maths);
        formData.append('science', value.science);
        formData.append('social_science', value.social_science);
        formData.append('computer', value.computer);
        formData.append('drawing', value.drawing);
        formData.append('evs', value.evs);
        formData.append('lib', value.lib);
        formData.append('gk', value.gk);
        formData.append('pt', value.pt);
        formData.append('teachers', value.teachers);
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.clshh.Regclasses(formData).subscribe((res:any)=>  {
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

    getStaffDetails(){
      this.staffService.getStaffDetails().subscribe((res: any) =>{
            this.staffs = res;
            // this.studentss = res;
            // this.studentId = this.students[0]["id"];
          });
          
        }

  

  simpleAlert(){
    Swal.fire('Hi! Class updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Class Registered successfully', 'success')
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


