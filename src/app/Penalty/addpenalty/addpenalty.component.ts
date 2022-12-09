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
import { PenaltyurlService } from "../penaltyurl.service";
import { ClassurlService } from "src/app/shared/services/classurl.service";

@Component({
  selector: "app-addpenalty",
  templateUrl: "./addpenalty.component.html",
  styleUrls: ["./addpenalty.component.css"],
})
export class AddpenaltyComponent implements OnInit {
  penaltyForm: FormGroup;
  classmemo: any;
  isDean: boolean;
  public penalties :any[]=[];
  constructor(private fb: FormBuilder ,private penalserv: PenaltyurlService , private clshh :ClassurlService) {
    this.penaltyForm = this.fb.group({
      student_name: ["", Validators.required],
      class_name: ["", [Validators.required]],
      section: ["", Validators.required],
      rollno: ["", [Validators.required]],
      penalty: ["", [Validators.required]],
      penalty_reason: ["", [Validators.required]],
      penalty_remark: ["", [Validators.required]],
      // penalties: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getclassDetails();
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
       }
     else{
      this.isDean = false;
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
    this.penalties.push({
      id: this.penalties.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.penalties.splice(i, 1);
  }
  onSubmit(){
   
    // console.log(this.studentregForm.value);
    var value = this.penaltyForm.value
    
  
    var formData: any = new FormData();
        formData.append('student_name', value.student_name);
        formData.append('class_name', value.class_name);
        // formData.append('startedYear', value.startedYear);
        formData.append('section', value.section);
        formData.append('rollno', value.rollno);
        formData.append('penalty', value.penalty);
        formData.append('penalty_reason', value.penalty_reason);
        formData.append('penalty_remark', value.penalty_remark);

       
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.penalserv.RegPenalty(formData).subscribe((res:any)=>  {
        console.log(res)

        if(this.penalties.length > 0){
          for(let i=0; i<this.penalties.length; i++){    
            const extraData = {
              penalty: res.id,
              name: this.penalties[i].name,
              value: this.penalties[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.penalserv.RegaddmorePenalty(extraData).subscribe((res:any)=>  {
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
      Swal.fire('Hi !Penalty Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Penalty Added successfully', 'success')
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
