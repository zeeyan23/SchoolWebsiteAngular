import { ExpenseurlService } from './../expenseurl.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.css']
})
export class AddexpenseComponent implements OnInit {

  expenseForm: FormGroup;
  imageSrc: string;
  selectedFile: File;
  isDean: boolean;
  studentID: any;
  expenceID: any;
  public expensies: any[] = [];
  constructor( private fb:FormBuilder , private expenserve :ExpenseurlService) {
  
   }

  ngOnInit(): void {
    this.expenseForm= this.fb.group({
       
      expense_type:['',Validators.required],
      expense_detail: ['',[Validators.required]],
      amount: ['',[Validators.required]],
      expense_proof: [null,[Validators.required]],
      expense_date: ['',[Validators.required]],
      payment_mode: ['',Validators.required],
      // expensies: this.fb.array([]) ,
      
     
    });

    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
   else{
    this.isDean = false;
  }
  }
 
  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.expensies.push({
      id: this.expensies.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.expensies.splice(i, 1);
  }
   
      
  get f(){
    return this.expenseForm.controls;
  }

  uploadFile(event) {
    

    const reader = new FileReader();
    
    this.selectedFile = <File>event.target.files[0];
      // debugger
      console.log(this.selectedFile);
  }

submitForm(){
   
  // console.log(this.studentregForm.value);
  var value = this.expenseForm.value
  

  var formData: any = new FormData();
      formData.append('expense_type', value.expense_type);
      formData.append('expense_detail', value.expense_detail);
      // formData.append('startedYear', value.startedYear);
      formData.append('amount', value.amount);
      if(this.selectedFile == null){
       
        formData.append('expense_proof', "");
      }
      else{
        formData.append('expense_proof', this.selectedFile, this.selectedFile.name);
      }
      
      formData.append('expense_date', value.expense_date);
      formData.append('payment_mode', value.payment_mode);
      
      
      console.log(formData);

    
    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */
    
    this.expenserve.Regexpense(formData).subscribe((res:any)=>  {
      console.log(res)

      if(this.expensies.length > 0){
        for(let i=0; i<this.expensies.length; i++){    
          const extraData = {
            expense: res.id,
            name: this.expensies[i].name,
            value: this.expensies[i].value,
          };

          this.expenserve.Regaddmoreexpense(extraData).subscribe((res:any)=>  {
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
    Swal.fire('Hi ! Expense Updated successfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Expense Registered successfully', 'success')
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
