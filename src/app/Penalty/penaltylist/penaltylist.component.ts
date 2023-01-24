import { PenaltyurlService } from "./../penaltyurl.service";
import { Component, OnInit } from "@angular/core";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { UntypedFormBuilder, Validators } from "@angular/forms";
import { HttpErrorResponse } from "@angular/common/http";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { endOfWeekWithOptions } from "date-fns/fp";

@Component({
  selector: "app-penaltylist",
  templateUrl: "./penaltylist.component.html",
  styleUrls: ["./penaltylist.component.css"],
})
export class PenaltylistComponent implements OnInit {
  penalties: any;
  regnos: string;
  studname: string;
  cls: string;
  sectn: string;
  penl: string;
  penalre: string;
  penalrem: string;
  updat: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  penaltyForm: any;
  closeResult: string;
  penalty: any;

  popoverTitle = 'Delete Penalty';
  popoverMessage = 'Are you sure want to delete Permanently?';
  confirmClicked = false;
  cancelClicked = false;
  penal: any;
  penaltiesofschool: any;
  isDean: boolean;

  constructor(private penalserve: PenaltyurlService, private fb: UntypedFormBuilder,  private modalService: NgbModal, ) {}

  ngOnInit(): void {
  
    this.penaltyForm = this.fb.group({
      student_name: ["", Validators.required],
      class_name: ["", [Validators.required]],
      section: ["", Validators.required],
      rollno: ["", [Validators.required]],
      penalty: ["", [Validators.required]],
      penalty_reason: ["", [Validators.required]],
      penalty_remark: ["", [Validators.required]],
      penalties: this.fb.array([]),
    });
    this.getpenaltyDetails();

    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
    }
     else{
      this.isDean = false;
    }
  }

  getpenaltyDetails(){
    this.penalserve.getpenaltyDetails().subscribe((res: any) =>{
          console.log(res);
          this.penalties = res;
          this.penal =res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.penalties);
        
      }

    


      Updatepenalty(Id: any){

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
    
        
    this.penalserve.Updatepenalty(formData, Id).subscribe((res:any)=>  {
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

  download() {
    let fileName = "Penalty.csv";
    let columnNames = [
      "Regno.",
      "Student Name",
      "Class",
      "Section",
      "Penalty",
      "Penalty Reason",
      "Penalty Remark",
    
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    console.log("student list:", this.penalties);
    for (let i = 0; i < this.penalties.length; ++i) {
      this.regnos = this.penalties[i].rollno;
      this.studname = this.penalties[i].student_name;
      this.cls = this.penalties[i].class_name;
      this.sectn = this.penalties[i].section;
      this.penl = this.penalties[i].penalty;
      this.penalre = this.penalties[i].penalty_reason;
      this.penalrem = this.penalties[i].penalty_remark;
    

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.regnos],
        [this.studname],
        [this.cls],
        [this.sectn],
        [this.penl],
        [this.penalre],
        [this.penalrem],
        [this.updat],
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


  openpenalty(penaltyinfomodal, penalty) {
    console.log("id iss:", penalty);
    this.penalty = penalty;
    this.modalService
      .open(penaltyinfomodal, { ariaLabelledBy: "modal-basic-title" })
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


  simpleAlert(){
    Swal.fire('Hi! Penalty updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Penalty Registered successfully', 'success')
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


  deleteRow(Id): void{
    this.penalserve.deletePenalty(Id)//method name in your services.ts file
    .subscribe(data =>{
      this.penalties =data;
    });
    for(let i = 0; i < this.penalties.length; ++i){
      if (this.penalties[i].id === Id) {
          this.penalties.splice(i,1);
      }
  }

}



valueSelectedd(selectedroll:String){
  this.penaltiesofschool=this.penal;
  console.log('studentdata',this.penalties);

  var filteredpenal = this.penaltiesofschool.filter(
    item => item.rollno == selectedroll
  );
  this.penalties = filteredpenal;
  console.log('result', filteredpenal)
}
  
}
