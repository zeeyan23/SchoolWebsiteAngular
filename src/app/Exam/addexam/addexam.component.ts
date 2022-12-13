import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ExamurlService } from "../examurl.service";
import { ClassurlService } from "src/app/shared/services/classurl.service";

@Component({
  selector: 'app-addexam',
  templateUrl: './addexam.component.html',
  styleUrls: ['./addexam.component.css']
})
export class AddexamComponent implements OnInit {

  closeResult: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  exam: { exam_name: string; start_date: string; end_date: string; Total_marks: string; hour: string; class: string; }[];
  examForm: FormGroup;
  classmemo: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  public examies:any[]=[];
  constructor(
    private fb: FormBuilder,
    private examserve :ExamurlService,
    private clshh :ClassurlService
  ) {}
  ngOnInit(): void {
    this.examForm = this.fb.group({
      exam_name: ["", Validators.required],
      start_date: ["", [Validators.required]],
      end_date:["", [Validators.required]],
      Total_marks: ["", [Validators.required]],
      hour: ["", [Validators.required]],
      class_name: ["", [Validators.required]],
      // examies: this.fb.array([]),
    });

    this.getclassDetails();
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

  
  getclassDetails(){
    this.clshh.getClassDetails().subscribe((res: any) =>{
          console.log(res);
          this.classmemo = res;
          
        });
        console.log('class',this.classmemo);
        
      }

 
  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.examies.push({
      id: this.examies.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.examies.splice(i, 1);
  }
  submitForm(){
   
    // console.log(this.studentregForm.value);
    var value = this.examForm.value
    
  
    var formData: any = new FormData();
        formData.append('exam_name', value.exam_name);
        formData.append('start_date', value.start_date);
        // formData.append('startedYear', value.startedYear);
        formData.append('end_date', value.end_date);
        formData.append('Total_marks', value.Total_marks);
        formData.append('hour', value.hour);
        formData.append('class_name', value.class_name);
        
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.examserve.Regexam(formData).subscribe((res:any)=>  {
        console.log(res)


        if(this.examies.length > 0){
          for(let i=0; i<this.examies.length; i++){    
            const extraData = {
              exam: res.id,
              name: this.examies[i].name,
              value: this.examies[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.examserve.Regaddmoreexam(extraData).subscribe((res:any)=>  {
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
      Swal.fire('Hi! Exam Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Exam Added successfully', 'success')
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



