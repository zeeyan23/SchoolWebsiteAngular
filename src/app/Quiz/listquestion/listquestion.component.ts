import { QuizurlService } from '../quizurl.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css']
})
export class ListquestionComponent implements OnInit {
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  quizes: any;

  popoverTitle = 'Delete Question';
  popoverMessage = 'Are you sure want to delete?';
  confirmClicked = false;
  cancelClicked = false;
  isDean: boolean;
  isStaff: boolean;


  constructor(private quizserve:QuizurlService ,private modalService: NgbModal ,private fb:FormBuilder) { }

  ngOnInit(): void {
  
	  this.getquizDetails();
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
    }
   else{
    this.isDean = false;
   }
   if(localStorage.getItem('group') == 'staff') {
   this.isStaff = true;
}
 else{
  this.isStaff = false;

 }
  }



  getquizDetails(){
    this.quizserve.getQuizDetails().subscribe((res: any) =>{
          console.log(res);
          this.quizes = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.quizes);
        
      }

    


    

    simpleAlert(){
      Swal.fire('Hi ! updated sucessfully');
      }
      
      successAlertNotification(){
      Swal.fire('Hi', 'Congrats! Registered successfully', 'success')
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

    

    deleteRow(Id): void{
      this.quizserve.deleteQuiz(Id)//method name in your services.ts file
      .subscribe(data =>{
        this.quizes =data;
      });
      for(let i = 0; i < this.quizes.length; ++i){
        if (this.quizes[i].id === Id) {
            this.quizes.splice(i,1);
        }
    }
  
}

}
