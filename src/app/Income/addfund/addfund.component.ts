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
import { IncomeurlService } from "../incomeurl.service";

@Component({
  selector: "app-addfund",
  templateUrl: "./addfund.component.html",
  styleUrls: ["./addfund.component.css"],
})
export class AddfundComponent implements OnInit {
  fundForm: FormGroup;
  isDean: boolean;
  public fundies :any[]=[];
  constructor(private fb: FormBuilder, private incomserve :IncomeurlService) {
    
  }

  ngOnInit(): void {
    this.fundForm = this.fb.group({
      first_name: ["", Validators.required],
      second_name: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      message: ["", [Validators.required]],
      // fundies: this.fb.array([]),
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
    this.fundies.push({
      id: this.fundies.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.fundies.splice(i, 1);
  }
  onSubmit(){
   
    // console.log(this.studentregForm.value);
    var value = this.fundForm.value
    
  
    var formData: any = new FormData();
        formData.append('first_name', value.first_name);
        formData.append('second_name', value.second_name);
        // formData.append('startedYear', value.startedYear);
        formData.append('phone', value.phone);
        formData.append('amount', value.amount);
        formData.append('message', value.message);
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.incomserve.Regfund(formData).subscribe((res:any)=>  {
        console.log(res)


        if(this.fundies.length > 0){
          for(let i=0; i<this.fundies.length; i++){    
            const extraData = {
              fund: res.id,
              name: this.fundies[i].name,
              value: this.fundies[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.incomserve.Regaddmorefund(extraData).subscribe((res:any)=>  {
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
      Swal.fire('Hi ! Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Fund Added successfully', 'success')
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
