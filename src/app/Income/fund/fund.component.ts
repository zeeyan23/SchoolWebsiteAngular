import { IncomeurlService } from "./../incomeurl.service";
import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
@Component({
  selector: "app-fund",
  templateUrl: "./fund.component.html",
  styleUrls: ["./fund.component.css"],
})
export class FundComponent implements OnInit {
  closeResult: string;
  fund: any;
  fundForm: FormGroup;
  expensess: string;
  amount: any;
  datefex: any;
  paym: string;
  payms: string;
  funds: {
    first_name: string;
    second_name: string;
    phone: number;
    amount: string;
    message: string;
  }[];
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  firstn: string;
  secondn: string;
  phones: number;
  amt: string;
  mag: string;
  isDean: boolean;
  constructor(
    private fb: FormBuilder,
    private incserve: IncomeurlService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    

    this.fundForm = this.fb.group({
      first_name: ["", Validators.required],
      second_name: ["", [Validators.required]],
      phone: ["", [Validators.required]],
      amount: ["", [Validators.required]],
      message: ["", [Validators.required]],
      fundies: this.fb.array([]),
    });

    this.getFundDetails();
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
       }
     else{
      this.isDean = false;
      }
  }

  getFundDetails(){
    this.incserve.getfundDetails().subscribe((res: any) =>{
          console.log(res);
          this.funds = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.funds);
        
      }

    

      Updatefunds(Id: any){

        var value = this.fundForm.value
        var formData: any = new FormData();
        formData.append('first_name', value.first_name);
        formData.append('second_name', value.second_name);
        // formData.append('startedYear', value.startedYear);
        formData.append('phone', value.phone);
        formData.append('amount', value.amount);
        formData.append('message', value.message);
        
            
            console.log(formData);
    
        
    this.incserve.Updatefund(formData, Id).subscribe((res:any)=>  {
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

  openFund(fundinfomodal, fund) {
    this.fund = fund;
    this.modalService
      .open(fundinfomodal, { ariaLabelledBy: "modal-basic-title" })
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
    let fileName = "ExpenseList.csv";
    let columnNames = [
      "Expense Name",
      "Amount",
      "Date Of Expense",
      "Payment Mode",
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    this.funds = this.incserve.Funds;
    console.log("student list:", this.funds);
    for (let i = 0; i < this.funds.length; ++i) {
      this.firstn = this.funds[i].first_name;
      this.secondn = this.funds[i].second_name;
      this.phones = this.funds[i].phone;
      this.amt = this.funds[i].amount;
      this.mag = this.funds[i].message;

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.firstn],
        [this.secondn],
        [this.phones],
        [this.amt],
        [this.mag],
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
    Swal.fire('Hi ! Fund updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Fund Registered successfully', 'success')
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
  
}
