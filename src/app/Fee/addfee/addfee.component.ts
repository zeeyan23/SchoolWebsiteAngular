import { FeeurlService } from "../../shared/services/feeurl.service";
import { Component, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  FormControl,
  FormArray,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
// import { ClassurlService } from 'src/app/Class/Classurl.service';
import Swal from "sweetalert2/dist/sweetalert2.js";
import { ClassurlService } from "src/app/shared/services/classurl.service";

@Component({
  selector: "app-addfee",
  templateUrl: "./addfee.component.html",
  styleUrls: ["./addfee.component.css"],
})
export class AddfeeComponent implements OnInit {
  feetypeForm: UntypedFormGroup;
  classmemo: {
    id: string;
    Maths: boolean;
    class_name: string;
    computer: boolean;
    english: boolean;
    hindi: boolean;
    kannada: boolean;
    pt: boolean;
    science: boolean;
    section: string;
    social_science: boolean;
    teachers: string;
  }[];
  isDean: boolean;
  public feeses: any[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private feeserve: FeeurlService,
    private router: Router,
    private clshh : ClassurlService
  ) 
  {}

  ngOnInit(): void {
    // this.classmemo =this.feees.Class;
    this.feetypeForm = this.fb.group({
      class_name: ["", Validators.required],
      academic_year: ["", [Validators.required]],
      admission_fee: ["", [Validators.required]],
      tuition_fee: ["", Validators.required],
      exam_fee: ["", [Validators.required]],
      computer_fee: ["", Validators.required],
      transport_fee: ["", Validators.required],
      food_fee: ["", Validators.required],
      hostel_fee: ["", Validators.required],
      misc_fee: ["", Validators.required],
     
    });
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
  }
   else{
    this.isDean = false;
  }
   this.getclassDetails();

  }

  
  newQuantity(): UntypedFormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.feeses.push({
      id: this.feeses.length + 1,
      name: '',
      amount: '',
    });
  }


   
  removeQuantity(i:number) {
    this.feeses.splice(i, 1);
  }

  getclassDetails(){
    this.clshh.getClassDetails().subscribe((res: any) =>{
          console.log(res);
          this.classmemo = res;
          
        });
        console.log('class',this.classmemo);
        
      }
   

  submitForm() {
    // console.log(this.studentregForm.value);
    var value = this.feetypeForm.value;

    var formData: any = new FormData();
    formData.append("class_name", value.class_name);
    formData.append("academic_year", value.academic_year);
    formData.append("admission_fee", value.admission_fee);
    formData.append("tuition_fee", value.tuition_fee);
    formData.append("exam_fee", value.exam_fee);
    formData.append("computer_fee", value.computer_fee);
    formData.append("transport_fee", value.transport_fee);
    formData.append("food_fee", value.food_fee);
    formData.append("hostel_fee", value.hostel_fee);
    formData.append("misc_fee", value.misc_fee);
    console.log(formData);

    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */

    this.feeserve.Regfee(formData).subscribe(
      (res: any) => {
        console.log(res);


        if(this.feeses.length > 0){
          for(let i=0; i<this.feeses.length; i++){    
            const extraData = {
              fee: res.id,
              name: this.feeses[i].name,
              value: this.feeses[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.feeserve.Regaddmorefee(extraData).subscribe((res:any)=>  {
              console.log(res)
            
          });
          }
        }

        this.successAlertNotification();
        // this.success = true;
        // this.errMsg = false;
        // this.showForm = false;
        // this.showContact = false;
        // this.router.navigate(['student/studentdetails']);
      },
      (error: HttpErrorResponse) => {
        this.erroalert();
        console.log(error);
        // this.success = false;
        // this.errMsg = true;
        // this.showForm = false;
        // this.showContact = false;
      }
    );
  }

  simpleAlert() {
    Swal.fire("Hi! Fee Data Updated successfully");
  }

  successAlertNotification() {
    Swal.fire("Hi", "Fee Data Registered successfully", "success");
  }

  alertConfirmation() {
    Swal.fire({
      title: "Are you sure?",
      text: "Your Action cannot be rollback.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, go ahead.",
      cancelButtonText: "No, let me think again",
    }).then(result => {
      if (result.value) {
        Swal.fire("Done!", "Action performed successfully.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelled",
          "Performed action record present in cloud and databstore.)",
          "error"
        );
      }
    });
  }

  erroalert() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      // footer: '<a href>Why do I have this issue?</a>',
    });
  }
}
