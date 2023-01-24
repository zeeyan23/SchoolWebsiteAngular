import { ReporturlService } from "./../reporturl.service";
import { StudenturlService } from "src/app/shared/services/studenturl.service";
import { Component, OnInit } from "@angular/core";
import {
  UntypedFormGroup,
  FormControl,
  FormArray,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { DatePipe } from '@angular/common';
var CurrentDate = new Date();

@Component({
  selector: "app-paidstudents",
  templateUrl: "./paidstudents.component.html",
  styleUrls: ["./paidstudents.component.css"],
})
export class PaidstudentsComponent implements OnInit {
  pays: any;
  closeResult: string;
  names: any;
  reg: any;
  cls: any;
  sectn: any;
  totlp: any;
  totld: any;
  stat: any;
  penal: any;
  paidb: any;
  dofreg: any;
  updat: any;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  paid: any;
  paidinfoForm: UntypedFormGroup;
  paytab: any;
  paysofschool: any;
  Due_date: any;
  latest_date: string;
  stats: any;
  dued: any;
  paidd: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  paiddate: any;
  Due_dates: any;
  duedatess: string;
  paiddatess: string;
  constructor(
    private reposervice: ReporturlService,private studentservice: StudenturlService,
    private modalService: NgbModal,
    private fb: UntypedFormBuilder,
    public datepipe: DatePipe
  ) {}

  ngOnInit(): void {
    // this.pays = this.studentservice.Students;
    

    this.paidinfoForm = this.fb.group({
      student_name: ["", Validators.required],
      reg_number: ["", Validators.required],
      class_name: ["", Validators.required],
      section: ["", Validators.required],
      paid_fee: ["", Validators.required],
      total_due: ["", Validators.required],
      status: ["", Validators.required],
      Due_date: ["", Validators.required],
      paid_by: ["", Validators.required],
      paid_date: ["", Validators.required],
      
    });

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

    this.getStudentDetails();
  }


  getStudentDetails(){
    this.studentservice.getStudentDetails().subscribe((res: any) =>{
          console.log(res);
          this.pays = res;
          this.paytab =res;
          this.Due_dates = this.pays[0]['Due_date']
          this.paiddate = this.pays[0]["paid_date"];
         
          console.log('dateee', this.Due_date)
          console.log('dateee', CurrentDate)
          this.latest_date =this.datepipe.transform(CurrentDate, 'yyyy-MM-dd');

          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        //   if(this.latest_date > this.Due_date){
        //     alert('Given date is greater than the current date.');
        // }
        });
        console.log('reeeeeeeeeee',this.pays);
      
        
      }


      Updatestudent(Id: any){

        var value = this.paidinfoForm.value
        var formData: any = new FormData();
            formData.append('reg_number', value.reg_number);
            formData.append('student_name', value.student_name);
            formData.append('class_name', value.class_name);
            formData.append('section', value.section);
            formData.append('paid_fee', value.paid_fee);
            formData.append('Due_date', value.Due_date);
            formData.append('paid_by', value.paid_by);
            formData.append('paid_date', value.paid_date);
          
            console.log(formData);
    
        
    this.studentservice.Updatestudent(formData, Id).subscribe((res:any)=>  {
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
    

  
  openReport(feereportModal, paid) {
    this.paid = paid;
    paid.total_due=paid.total_fee - paid.paid_fee;
    if (paid.total_fee == paid.paid_fee){
      paid.status = 'Paid';
    }

    else{
      paid.status = 'Pending';
    }
    this.duedatess = new Date(this.Due_dates).toISOString().slice(0, -1)
    this.paiddatess = new Date(this.paiddate).toISOString().slice(0, -1)
    paid.Due_date = this.duedatess;
    paid.paid_date = this.paiddatess;
    this.modalService
      .open(feereportModal, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
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
    let fileName = "Feedetails.csv";
    let columnNames = [
      "Student Name",
      "Regno.",
      "Class",
      "Section",
      "Total Paid",
      "Total Due",
      "Status",
      "Due Date",
      "Paid Through",
      "Paid Date",
     
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    
    console.log("student list:", this.pays);
    for (let i = 0; i < this.pays.length; ++i) {
      this.names = this.pays[i].student_name;
      this.reg = this.pays[i].reg_number;
      this.cls = this.pays[i].class_name;
      this.sectn = this.pays[i].section;
      this.totlp = this.pays[i].paid_fee;
      this.totld = this.pays[i].total_fee - this.pays[i].paid_fee;
      this.stats = (this.pays[i].total_fee == this.pays[i].paid_fee) ? 'Paid' : 'Pending';
      this.dued = this.pays[i].Due_date;
      this.paidb = this.pays[i].paid_by;
      this.paidd = this.pays[i].paid_date;
     

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.names],
        [this.reg],
        [this.cls],
        [this.sectn],
        [this.totlp],
        [this.totld],
        [this.stats],
        [this.dued],
        [this.paidb],
        [this.paidd],
       
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

  
  valueSelectedd(selectedclasss:String){
    this.paysofschool=this.paytab;
    console.log('studentdata',this.pays);
  
    var filteredpay = this.paysofschool.filter(
      item => item.class_name == selectedclasss
    );
    this.pays= filteredpay;
    console.log('result', filteredpay  )
 }

 simpleAlert(){
  Swal.fire('Hi !Fee Report updated sucessfully');
}

successAlertNotification(){
  Swal.fire('Hi', 'Fee Report Added successfully', 'success')
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
