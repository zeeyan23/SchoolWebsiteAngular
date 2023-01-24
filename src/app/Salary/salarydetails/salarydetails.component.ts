import { SalaryurlService } from "./../salaryurl.service";
import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import {
  UntypedFormGroup,
  FormControl,
  FormArray,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: "app-salarydetails",
  templateUrl: "./salarydetails.component.html",
  styleUrls: ["./salarydetails.component.css"],
})
export class SalarydetailsComponent implements OnInit {
  salaryForm: UntypedFormGroup;
  closeResult: string;
  salary: any;

  regnos: any;
  studname: any;
  cls: any;
  sectn: any;
  fathname: any;
  contno: any;
  admissiondate: any;
  adrs: any;
 
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  sal: any;
  salariesofschool: any;
  staffname: string;
  contcno: any;
  design: string;
  dates: string;
  exp: string;
  amount: string;
  balance: string;
  remarks: string;
  advnamount: string;
  salaries: any;
  isDean: boolean;
  saldate: string;
  constructor(
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private salaryserv: SalaryurlService
  ) {}

  ngOnInit(): void {
 

    this.salaryForm = this.fb.group({
      name: ["", Validators.required],
      contact_no: ["", [Validators.required]],
      designation: ["", Validators.required],
      date: ["", [Validators.required]],
      yoe: ["", Validators.required],
      amount: ["", [Validators.required]],
      amount_balance: ["", Validators.required],
      advance_amount: ["", [Validators.required]],
      remark: ["", Validators.required],
    });
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
       }
     else{
      this.isDean = false;
    }

    this.getStudentDetails();
  }


  getStudentDetails(){
    this.salaryserv.getsalaryDetails().subscribe((res: any) =>{
          console.log(res);
          this.salaries = res;
          this.sal =res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
          this.dates = this.sal[0]['date'];
        });
        console.log('reeeeeeeeeee',this.salaries);
        
      }




      Updatesalary(Id: any){

        var value = this.salaryForm.value
        var formData: any = new FormData();
        formData.append('name', value.name);
        formData.append('contact_no', value.contact_no);
        // formData.append('startedYear', value.startedYear);
        formData.append('designation', value.designation);
        formData.append('date', value.date);
        formData.append('yoe', value.yoe);
        formData.append('amount', value.amount);
        formData.append('amount_balance', value.amount_balance);
        formData.append('advance_amount', value.advance_amount);
        formData.append('remark', value.remark);
            
            console.log(formData);
    
        
    this.salaryserv.Updatesalary(formData, Id).subscribe((res:any)=>  {
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

  openSalary(salarymodal, salary) {
    console.log("id iss:", salary);
    this.salary = salary;
    this.saldate = new Date(this.dates).toISOString().slice(0, -1)
	  salary.date = this.saldate;
    this.modalService
      .open(salarymodal, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          // this.feeDetail = {id:fee._id, class_name: fee.class_name, academic_year:fee.academic_year, tuition_fee:fee.tuition_fee};
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
    let fileName = "StudentList.csv";
    let columnNames = [
      "Staff Name",
      "Contact No.",
      "Designation",
      "Date",
      "Year of Experience",
      "Amount",
      "Balance amount",
      "Remark",
      "Advance amount",
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    
    console.log("salary details:", this.salaries);
    for (let i = 0; i < this.salaries.length; ++i) {
      this.staffname = this.salaries[i].name;
      this.contcno = this.salaries[i].contact_no;
      this.design = this.salaries[i].designation;
      this.dates = this.salaries[i].date;
      this.exp = this.salaries[i].yoe;
      this.amount = this.salaries[i].amount;
      this.balance = this.salaries[i].amount_balance;
      this.remarks = this.salaries[i].remark;
      this.advnamount = this.salaries[i].advance_amount;
      

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.staffname],
        [this.contcno],
        [this.design],
        [this.dates],
        [this.exp],
        [this.amount],
        [this.balance],
        [this.remarks],
        [this.advnamount],
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

  simpleAlert(){
    Swal.fire('Hi! Salary updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Salary Registered successfully', 'success')
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

  
  valueSelectedd(selectedstaffname:String){
    this.salariesofschool=this.sal;
    console.log('studentdata',this.salaries);
  
    var filteredsal = this.salariesofschool.filter(
      item => item.name == selectedstaffname
    );
    this.salaries = filteredsal;
    console.log('result', filteredsal)
 }
  
}
