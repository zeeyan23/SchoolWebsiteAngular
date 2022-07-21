import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { SalaryurlService } from '../salaryurl.service';
import { StaffurlService } from 'src/app/shared/services/staffurl.service';

@Component({
  selector: 'app-addsalary',
  templateUrl: './addsalary.component.html',
  styleUrls: ['./addsalary.component.css']
})
export class AddsalaryComponent implements OnInit {

  salaryForm: FormGroup;
  staffs: any;
  isDean: boolean;
  public salaries: any[]=[];
  constructor(private fb:FormBuilder , private salserve : SalaryurlService, private staffService : StaffurlService) {
    this.salaryForm = this.fb.group({
       
      name:['',Validators.required],
      contact_no: ['',[Validators.required]],
      designation:['',Validators.required],
      date: ['',[Validators.required]],
      yoe:['',Validators.required],
      amount: ['',[Validators.required]],
      amount_balance:['',Validators.required],
      advance_amount: ['',[Validators.required]],
      remark:['',Validators.required],
      // salaries: this.fb.array([]) ,
     
    });
   }

  ngOnInit(): void {
    this.getStaffDetails();
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
       }
     else{
      this.isDean = false;
    }
  }

  getStaffDetails(){
    this.staffService.getStaffDetails().subscribe((res: any) =>{
          console.log(res);
          this.staffs = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.staffs);
        
      }

   
  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.salaries.push({
      id: this.salaries.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.salaries.splice(i, 1);
  }

   
  onSubmit(){
   
    // console.log(this.studentregForm.value);
    var value = this.salaryForm.value
    
  
    var formData: any = new FormData();
        formData.append('name', value.name);
        formData.append('contact_no', value.contact_no);
        // formData.append('startedYear', value.startedYear);
        formData.append('designation', value.designation);
        formData.append('date', value.date);
        formData.append('yoe', value.yoe);
        formData.append('amount', value.amount);
        formData.append('amount_balance', value.amount_balance);
        formData.append('advance_amount', value.advance_amount);
        formData.append('remark', value.remark);
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.salserve.Regsalary(formData).subscribe((res:any)=>  {
        console.log(res)


        if(this.salaries.length > 0){
          for(let i=0; i<this.salaries.length; i++){    
            const extraData = {
              salary: res.id,
              name: this.salaries[i].name,
              value: this.salaries[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.salserve.Regaddmoresalary(extraData).subscribe((res:any)=>  {
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
      Swal.fire('Hi ! Salary Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Salary Registered successfully', 'success')
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
        footer: '<a href>Why do I have this issue?</a>'  
      })  
    } 

}
