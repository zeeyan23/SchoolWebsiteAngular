import { Feedata } from "./../feedata";
import { FeeurlService } from "../../shared/services/feeurl.service";
import { Component, OnInit } from "@angular/core";
// import { MatDialog} from '@angular/material/dialog';
import { FormGroup, FormBuilder } from "@angular/forms";

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-viewfeetypes",
  templateUrl: "./viewfeetypes.component.html",
  styleUrls: ["./viewfeetypes.component.css"],
})
export class ViewfeetypesComponent implements OnInit {
  feetypes: any = [];
  closeResult: string;
  data: any;
  private _id: any;
  class_name: any;
  feeDetail: any;
 
  class: any;
  fee: any;
  feedetail: Feedata[];
  classname: any;
  academicyear: any;
  admissionfee: any;
  tuitionfee: any;
  examfee: any;
  computerfee: any;
  transportfee: any;
  foodfee: any;
  hostelfee: any;
  miscfee: any;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  editfeeForm: FormGroup;
  feeee: any;
  feeofschool: any;
  isDean: boolean;

  constructor(
    private fb: FormBuilder,
    private feetypeservice: FeeurlService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    
    console.log("tabledata:", this.feetypes);

    this.editfeeForm = this.fb.group({
      class_name: [""],
      academic_year: [""],
      admission_fee: [""],
      tuition_fee: [""],
      exam_fee: [""],
      computer_fee: [""],
      transport_fee: [""],
      food_fee: [""],
      hostel_fee: [""],
      misc_fee: [""],
    });
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
   else{
    this.isDean = false;
  }

    this.getFeeDetails();
 }

 
  totalfee(feevalue: any){
    var total=0;
   total= Number(feevalue.admission_fee) + Number(feevalue.computer_fee) + Number(feevalue.exam_fee) + Number(feevalue.food_fee) + Number(feevalue.hostel_fee) + Number(feevalue.misc_fee) + Number(feevalue.transport_fee) + Number(feevalue.tuition_fee)
    console.log('total',total);
    return total;
    // this.feetypeservice.Fees.push(total)
    }

  

  openFee(feedatamodal, fee) {
    console.log("id iss:", fee);
    this.fee = fee;
    this.modalService
      .open(feedatamodal, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.class = fee[0]["class_name"];

          // this.feeDetail = {id:fee._id, class_name: fee.class_name, academic_year:fee.academic_year, tuition_fee:fee.tuition_fee};
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    console.log("heeyyyy:", fee["class_name"]);
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  download() {
    let fileName = "FeeList.csv";
    let columnNames = [
      "Class Name",
      "Academic Year",
      "Admission Fee",
      "Tuition Fee",
      "Exam Fee",
      "Computer Fee",
      "Transport Fee",
      "Food Fee",
      "Hostel Fee",
      "Miscalleneous Fee"
     
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

   
    console.log("tabledata:", this.feetypes);

    for (let i = 0; i < this.feetypes.length; ++i) {
      this.classname = this.feetypes[i].class_name;
      this.academicyear = this.feetypes[i].academic_year;
      this.admissionfee = this.feetypes[i].admission_fee;
      this.tuitionfee = this.feetypes[i].tuition_fee;
      this.examfee = this.feetypes[i].exam_fee;
      this.computerfee = this.feetypes[i].computer_fee;
      this.transportfee = this.feetypes[i].transport_fee;
      this.foodfee = this.feetypes[i].food_fee;
      this.hostelfee = this.feetypes[i].hostel_fee;
      this.miscfee = this.feetypes[i].misc_fee;

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.classname],
        [this.academicyear],
        [this.admissionfee],
        [this.tuitionfee],
        [this.examfee],
        [this.computerfee],
        [this.transportfee],
        [this.foodfee],
        [this.hostelfee],
        [this.miscfee],
      ].join(",");
      csv += "\r\n";
    }
    // console.log("DriverData",data);

    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

    var link = document.createElement("a");
    if (link.download !== undefined) {
      var url = URL.createObjectURL(blob);
      link.setAttribute("href", url);
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  getFeeDetails(){
    this.feetypeservice.getfeeDetails().subscribe((res: any) =>{
          console.log(res);
          this.feetypes = res;
          this.feeee = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.feetypes);
        
      }



      Updatestaff(Id: any){

        var value = this.editfeeForm.value
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
    
        
    this.feetypeservice.Updatefee(formData, Id).subscribe((res:any)=>  {
      console.log(res);
        
      this.simpleAlert()
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
  
    // window.location.reload();
    
    }


    simpleAlert(){
      Swal.fire('Hi! Fee Data updated sucessfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Fee Data Registered successfully', 'success')
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
    


    valueSelectedd(selectedclasss:String){
      this.feeofschool=this.feetypes;
      console.log('studentdata',this.feeee);
    
      var filteredfee = this.feeofschool.filter(
        item => item.class_name == selectedclasss
      );
      this.feeee = filteredfee;
      console.log('result', filteredfee)
   }

}
