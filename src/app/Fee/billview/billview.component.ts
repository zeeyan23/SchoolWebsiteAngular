import { CategoryService } from './../../shared/services/category.service';
import { FeeurlService } from "../../shared/services/feeurl.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder,Validators } from "@angular/forms";

import Swal from "sweetalert2/dist/sweetalert2.js";

import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { HttpErrorResponse } from "@angular/common/http";

@Component({
  selector: "app-billview",
  templateUrl: "./billview.component.html",
  styleUrls: ["./billview.component.css"],
})
export class BillviewComponent implements OnInit {

  closeResult: string;
  totalRec: number;
  page: number = 1;
  addcategoryForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private feetypeservice: FeeurlService,
    private catserve : CategoryService
    // private modalService: NgbModal
  ) {}

  ngOnInit(): void {

    this.addcategoryForm = this.fb.group({
       
      category:['',Validators.required],
      Percentage: ['',[Validators.required]],
      });
  // }
  // openBill(billdetailmodal, bill) {
  //   this.bill = bill;
  //   this.modalService
  //     .open(billdetailmodal, { ariaLabelledBy: "modal-basic-title" })
  //     .result.then(
  //       result => {
  //         this.closeResult = `Closed with: ${result}`;
  //       },
  //       reason => {
  //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
  //       }
  //     );
  // }
  // private getDismissReason(reason: any): string {
  //   if (reason === ModalDismissReasons.ESC) {
  //     return "by pressing ESC";
  //   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
  //     return "by clicking on a backdrop";
  //   } else {
  //     return `with: ${reason}`;
  //   }
  // }
  // download() {
  //   let fileName = "BillList.csv";
  //   let columnNames = [
  //     "Name",
  //     "Register Number",
  //     "Fathers Name",
  //     "class",
  //     "Section",
  //     "Admission Fee",
  //     "Tuition Fee",
  //     "Misc Fee",
  //     "total Fee",
  //     "Total Paid",
  //     "Total Due",
  //     "Date",
  //   ];
  //   let header = columnNames.join(",");

  //   let csv = header;
  //   csv += "\r\n";

  //   this.billing = this.feetypeservice.Bill;
  //   console.log("tabledata:", this.billing);

  //   for (let i = 0; i < this.billing.length; ++i) {
  //     this.classname = this.billing[i].name;
  //     this.academicyear = this.billing[i].register_number;
  //     this.admissionfee = this.billing[i].father_name;
  //     this.tuitionfee = this.billing[i].class;
  //     this.examfee = this.billing[i].section;
  //     this.computerfee = this.billing[i].admission_fee;
  //     this.transportfee = this.billing[i].tution_fee;
  //     this.foodfee = this.billing[i].misc_fee;
  //     this.hostelfee = this.billing[i].transport_fee;
  //     this.miscfee = this.billing[i].total_paid;
  //     this.miscfees = this.billing[i].Total_due;

  //     // console.log("Finalnumber",this.usernumber);
  //     csv += [
  //       [this.classname],
  //       [this.academicyear],
  //       [this.admissionfee],
  //       [this.tuitionfee],
  //       [this.examfee],
  //       [this.computerfee],
  //       [this.transportfee],
  //       [this.foodfee],
  //       [this.hostelfee],
  //       [this.miscfee],
  //       [this.miscfees],
  //     ].join(",");
  //     csv += "\r\n";
  //   }
  

  //   var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });

  //   var link = document.createElement("a");
  //   if (link.download !== undefined) {
  //     var url = URL.createObjectURL(blob);
  //     link.setAttribute("href", url);
  //     link.setAttribute("download", fileName);
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   }
  // }

  }
  submitForm() {
    // console.log(this.studentregForm.value);
    var value = this.addcategoryForm.value;

    var formData: any = new FormData();
    formData.append("category", value.category);
    formData.append("Percentage", value.Percentage);
    console.log(formData);

    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */

    this.catserve.Regcategory(formData).subscribe(
      (res: any) => {
        console.log(res);

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
    Swal.fire("Hi Welcome! Updated successfully");
  }

  successAlertNotification() {
    Swal.fire("Hi", "Congrats! Registered successfully", "success");
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
