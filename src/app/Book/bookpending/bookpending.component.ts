import { BookService } from "./../book.service";
import { Component, OnInit } from "@angular/core";
import { IssuedurlService } from "src/app/issued/issuedurl.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
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

@Component({
  selector: "app-bookpending",
  templateUrl: "./bookpending.component.html",
  styleUrls: ["./bookpending.component.css"],
})
export class BookpendingComponent implements OnInit {


  bookss: any;
  closeResult: string;
  classname: string;
  academicyear: string;
  admissionfee: string;
  tuitionfee: string;
  examfee: string;
  computerfee: string;
  transportfee: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  issued: any;
  book_status: any;
  issuebookForm: UntypedFormGroup;
  booksofschool: any;
  penbookss: any;
  issueddate: any;
  srno: any;
  accsionnum: any;
  admissionnum: any;
  studname: any;
  rollnum: any;
  fathername: any;
  contactnum: any;
  remarks: any;
  titles: string;
  authr: string;
  subjct: string;
  publshr: any;
  bookstats: any;
  penbooks: any;
  isDean: boolean;
  issuedat: any;
  pendate: any;


  constructor(
    private booki: BookService,
    private fb: UntypedFormBuilder,
    private modalService: NgbModal,
    private issues :IssuedurlService
  ) {}

  ngOnInit(): void {
  
    this.issuebookForm = this.fb.group({
      issuedate: ["", Validators.required],
      sr_no: ["", [Validators.required]],
      accession_no: ["", [Validators.required]],
      admission_no: ["", Validators.required],
      studentname: ["", [Validators.required]],
      class: ["", Validators.required],
      roll_no: ["", Validators.required],
      father_name: ["", Validators.required],
      contact_num: ["", Validators.required],
      remark: ["", Validators.required],
      title: ["", Validators.required],
      author: ["", Validators.required],
      subject: ["", Validators.required],
      publisher: ["", Validators.required],
      book_status :["", Validators.required],

      issuesies: this.fb.array([]),
    });
    this.getIssuedDetails();

    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
    }
    else{
    this.isDean = false;
    
    
    }
  }


  getIssuedDetails(){
    this.issues.getissueDetails().subscribe((res: any) =>{
          console.log(res);
          this.penbooks = res;
          this.penbookss = res;
          this.book_status = res[0]['book_status']

          console.log(this.book_status)
          this.penbooks = res.filter(x => x.book_status === 'Pending');
          this.penbookss = res.filter(x => x.book_status === 'Pending');
          this.pendate = this.penbookss[0]['issuedate'];
        });
       
        console.log('reeeeeeeeeee',this.penbooks);
        
      }

      Updateissued(Id: any){

        var value = this.issuebookForm.value
        var formData: any = new FormData();
        formData.append('issuedate', value.issuedate);
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
        formData.append('book_status', value.book_status);
    
        
    this.issues.Updateissue(formData, Id).subscribe((res:any)=>  {
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
      }

      valueSelected(selectedaccno:String , selectedauthor:String){
        this.booksofschool =this.penbookss;
        console.log('studentdata',this.penbookss);
      
        var filteredbook =this.booksofschool.filter(
          item => item.accession_no == selectedaccno || item.author == selectedauthor
        );
        this.penbooks = filteredbook;
        console.log('result',this.bookss)
      }




  openPendingbook(pendingbookmodal, bookss) {
    console.log("id iss:", bookss);
    this.bookss = bookss;
    this.issuedat = new Date(this.pendate).toISOString().slice(0, -1)
    bookss.issuedate = this.issuedat;
    this.modalService
      .open(pendingbookmodal, { ariaLabelledBy: "modal-basic-title" })
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
    let fileName = "PendingbookList.csv";
    let columnNames = [
      "Issued Date",
      "Sr Number",
      "Accession Number",
      "Admission Number",
      "Student Name",
      "Class Name",
      "Roll Number",
      "Father Name",
      "Contact Number",
      "Remark",
      "Title",
      "Author",
      "Subject",
      "Publisher",
     "Book Status"
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

   
    console.log("tabledata:", this.penbooks);

    for (let i = 0; i < this.penbooks.length; ++i) {
      this.issueddate = this.penbooks[i].issuedate;
      this.srno = this.penbooks[i].sr_no;
      this.accsionnum = this.penbooks[i].accession_no;
      this.admissionnum = this.penbooks[i].admission_no;
      this.studname = this.penbooks[i].studentname;
      this.classname = this.penbooks[i].class_name;
      this.rollnum = this.penbooks[i].roll_no;
      this.fathername = this.penbooks[i].father_name;
      this.contactnum = this.penbooks[i].contact_num;
      this.remarks = this.penbooks[i].remark;
      this.titles = this.penbooks[i].title;
      this.authr = this.penbooks[i].author;
      this.subjct = this.penbooks[i].subject;
      this.publshr= this.penbooks[i].publisher;
      this.bookstats = this.penbooks[i].book_status;
      
      

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.issueddate],
        [this.srno],
        [this.accsionnum],
        [this.admissionnum],
        [this.studname],
        [this.classname],
        [this.rollnum],
        [this.fathername],
        [this.contactnum],
        [this.remarks],
        [this.titles],
        [this.authr],
        [this.subjct],
        [this.publshr],
        [this.bookstats],
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
    Swal.fire('Hi !Books updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Books Registered successfully', 'success')
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
