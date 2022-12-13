import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {QuizurlService} from './../quizurl.service';

@Component({
  selector: "app-addquiz",
  templateUrl: "./addquiz.component.html",
  styleUrls: ["./addquiz.component.css"],
})
export class AddquizComponent implements OnInit {
  addquizForm: FormGroup;
  isDean: boolean;
  isStaff: boolean;

  constructor(private fb: FormBuilder, private quizserve :QuizurlService) {}

  ngOnInit(): void {
    this.addquizForm = this.fb.group({
      question: ["", Validators.required],
      optionA: ["", [Validators.required]],
      optionB: ["", [Validators.required]],
      optionC: ["", [Validators.required]],
      optionD: ["", [Validators.required]],
      answer: ["", [Validators.required]],
     
    });
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



  onSubmit(){
   
    // console.log(this.studentregForm.value);
    var value = this.addquizForm.value
    
  
    var formData: any = new FormData();
        formData.append('question', value.question);
        formData.append('optionA', value.optionA);
        // formData.append('startedYear', value.startedYear);
        formData.append('optionB', value.optionB);
        formData.append('optionC', value.optionC);
        formData.append('optionD', value.optionD);
        formData.append('answer', value.answer);
       
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.quizserve.Addquiz(formData).subscribe((res:any)=>  {
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
      Swal.fire('Hi! Quiz Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Quiz Added successfully', 'success')
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
        text: 'Something went wrong! please fill the fields correctly',  
        // footer: '<a href>Why do I have this issue?</a>'  
      })  
    } 
}


