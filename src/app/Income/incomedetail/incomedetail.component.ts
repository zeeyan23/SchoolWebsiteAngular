import { IncomeurlService } from "./../incomeurl.service";
import { UntypedFormGroup, UntypedFormBuilder } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-incomedetail",
  templateUrl: "./incomedetail.component.html",
  styleUrls: ["./incomedetail.component.css"],
})
export class IncomedetailComponent implements OnInit {
  closeResult: string;
  incomes: {
    total_fee: string;
    total_expense: string;
    total_Due: string;
    class: string;
    section: string;
    Date: string;
    penalty: string;
    academic_year: string;
  }[];
  regnos: any;
  studname: any;
  cls: any;
  sectn: any;
  penl: any;
  income: any;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  incomeupdateForm: UntypedFormGroup;
  totlfee: string;
  totlex: string;
  totldue: string;
  acadmyear: string;
  isDean: boolean;
  
  constructor(
    private incomeserve: IncomeurlService,
    private modalService: NgbModal,
	private fb: UntypedFormBuilder,
  ) {}

  ngOnInit(): void {
    this.incomes = this.incomeserve.Income;
    console.log("income details:", this.incomes);

	this.incomeupdateForm = this.fb.group({
		total_fee: [""],
		total_expense : [""],
		total_Due: [""],
		penalty : [""],
		academic_year: [""],
		
	  });
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
     else{
      this.isDean = false;
    }

  }
  
  openIncome(incomeinfomodal, income) {
    this.income = income;
    this.modalService
      .open(incomeinfomodal, { ariaLabelledBy: "modal-basic-title" })
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
    let fileName = "IncomeList.csv";
    let columnNames = [
      "Total Fee",
      "Total Expense",
      "Total Due Amount",
      "Total Penalties",
      "Academic Year",
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    
    console.log("student list:", this.incomes);
    for (let i = 0; i < this.incomes.length; ++i) {
      this.totlfee = this.incomes[i].total_fee;
      this.totlex = this.incomes[i].total_expense;
      this.totldue = this.incomes[i].total_Due;
      this.penl = this.incomes[i].penalty;
      this.acadmyear = this.incomes[i].academic_year;

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.totlfee],
        [this.totlex],
        [this.totldue],
        [this.penl],
        [this.acadmyear],
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
  
//   valueSelectedd(selectedclasss:String){
//     this.feeee=this.feeee;
//     console.log('studentdata',this.feeee);
  
//     var filteredfee = this.feeee.filter(
//       item => item.class_name == selectedclasss
//     );
//     this.feeee = filteredfee;
//     console.log('result', filteredfee)
//  }
}
