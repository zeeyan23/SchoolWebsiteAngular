import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { RecievedurlService } from '../recievedurl.service';

@Component({
  selector: 'app-addrecieved',
  templateUrl: './addrecieved.component.html',
  styleUrls: ['./addrecieved.component.css']
})
export class AddrecievedComponent implements OnInit {
  recievedbookForm: FormGroup;

  constructor(private fb:FormBuilder, private recieveserve : RecievedurlService) { }
  ngOnInit(): void {
    this.recievedbookForm = this.fb.group({
       
      recievedate: ["", Validators.required],
      sr_no: ["", [Validators.required]],
      accession_no: ["", [Validators.required]],
      admission_no: ["", Validators.required],
      studentname: ["", [Validators.required]],
      class_name: ["", Validators.required],
      roll_no: ["", Validators.required],
      father_name: ["", Validators.required],
      contact_num: ["", Validators.required],
      remark: ["", Validators.required],
      title: ["", Validators.required],
      author: ["", Validators.required],
      subject: ["", Validators.required],
      publisher: ["", Validators.required],
      
      recieves: this.fb.array([]) ,
    });
  }

  recieves() : FormArray {
    return this.recievedbookForm.get("recieves") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      name: '',
      value: '',
    })
  }
   
  addQuantity() {
    this.recieves().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.recieves().removeAt(i);
  }
 
  submitForm(){
   
    // console.log(this.studentregForm.value);
    var value = this.recievedbookForm.value
    
  
    var formData: any = new FormData();
        formData.append('recievedate', value.recievedate);
        formData.append('sr_no', value.sr_no);
        // formData.append('startedYear', value.startedYear);
        formData.append('accession_no', value.accession_no);
        formData.append('admission_no', value.admission_no);
        formData.append('studentname', value.studentname);
        formData.append('class_name', value.class_name);
        formData.append('roll_no', value.roll_no);
        formData.append('father_name', value.father_name);
        formData.append('contact_num', value.contact_num);
        formData.append('remark', value.remark);
        formData.append('title', value.title);
        formData.append('author', value.author);
        formData.append('subject', value.subject);
        formData.append('publisher', value.publisher);
       
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.recieveserve.Regrecieve(formData).subscribe((res:any)=>  {
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
      Swal.fire('Hi! Data Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Data Added successfully', 'success')
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
