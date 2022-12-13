import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { HttpErrorResponse } from '@angular/common/http';



@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit {
 
  addbookForm: FormGroup;
  book: any;
  closeResult: string;
  classname: string;
  academicyear: string;
  admissionfee: string;
  tuitionfee: string;
  examfee: string;
  computerfee: string;
  transportfee: string;
  foodfee: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  accno: string;
  barcodeid: string;
  titles: string;
  subjects: string;
  authr: string;
  publishr: string;
  edition: string;
  years: string;
  pages: any;
  topic: any;
  isbns: any;
  billnum: any;
  boknum: any;
  bokcost: any;
  bokremark: any;
  books: any;
  bookss: any;
  booksofschool: any;
  isDean: boolean;
  isStaff: boolean;
  bookdate: any;
  bokdate: any;


  constructor( private booky:BookService,private fb:FormBuilder,  private modalService: NgbModal) { }

  ngOnInit(): void {

  


    this.addbookForm = this.fb.group({
       
      accession_number:['',Validators.required],
      barcode_id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      subject: ['',Validators.required],
      author: ['',[Validators.required]],
      publisher: ['',Validators.required],
      edition: ['',Validators.required],
      year: ['',Validators.required],
      page: ['',Validators.required],
      topic:['',Validators.required],
      isbn:['',Validators.required],
      source:['',Validators.required],
      class_name:['',Validators.required],
      bill_num:['',Validators.required],
      date:['',Validators.required],
      book_num:['',Validators.required],
      cost:['',Validators.required],
      remark:['',Validators.required],
      bookies: this.fb.array([]) ,
    });

    this.getbookDetails();
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
  }
  getbookDetails(){
    this.booky.getbookDetails().subscribe((res: any) =>{
          console.log(res);
          this.books = res;
          this.bookss = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
          // this.bokdate = this.bookss[0]['date']
        });
        console.log('reeeeeeeeeee',this.books);
        
      }

   


      Updatebook(Id: any){

        var value = this.addbookForm.value
        var formData: any = new FormData();
        formData.append('accession_number', value.accession_number);
        formData.append('barcode_id', value.barcode_id);
        // formData.append('startedYear', value.startedYear);
        formData.append('title', value.title);
        formData.append('subject', value.subject);
        formData.append('author', value.author);
        formData.append('publisher', value.publisher);
        formData.append('edition', value.edition);
        formData.append('year', value.year);
        formData.append('page', value.page);
        formData.append('topic', value.topic);
        formData.append('isbn', value.isbn);
        formData.append('source', value.source);
        formData.append('class_name', value.class_name);
        formData.append('bill_num', value.bill_num);
        formData.append('book_num', value.book_num);
        formData.append('cost', value.cost);
        formData.append('remark', value.remark);
        
            console.log(formData);
    
        
    this.booky.Updatebook(formData, Id).subscribe((res:any)=>  {
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


    valueSelected(selectedaccno:String , selectedauthor:String){
      this.booksofschool =this.bookss;
      console.log('studentdata',this.bookss);
    
      var filteredbook =this.booksofschool.filter(
        item => item.accession_number == selectedaccno || item.author == selectedauthor
      );
      this.books = filteredbook;
      console.log('result',this.bookss)
    }

openBook(booksinfomodal, book) {
  console.log("id iss:", book);
  this.book = book;
  // this.bookdate = new Date(this.bokdate).toISOString().slice(0, -1)
  // book.date = this.bookdate;

  this.modalService
    .open(booksinfomodal, { ariaLabelledBy: "modal-basic-title" })
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
  let fileName = "BooksList.csv";
  let columnNames = [
    "Accession Number",
    "Barcode ID",
    "Title",
    "Subject",
    "Author",
    "Publisher",
    "Edition",
    "Year",
    "Page",
    "Topic",
    "ISBN",
    "Class Name",
    "Bill Number",
    "Book Number",
    "Cost",
    "Remark"
   
  ];
  let header = columnNames.join(",");

  let csv = header;
  csv += "\r\n";

  
  console.log("tabledata:", this.books);

  for (let i = 0; i < this.books.length; ++i) {
    this.accno = this.books[i].accession_number;
    this.barcodeid = this.books[i].barcode_id;
    this.titles = this.books[i].title;
    this.subjects = this.books[i].subject;
    this.authr = this.books[i].author;
    this.publishr = this.books[i].publisher;
    this.edition = this.books[i].edition;
    this.years = this.books[i].year;
    this.pages = this.books[i].page;
    this.topic = this.books[i].topic;
    this.isbns = this.books[i].isbn;
    this.classname = this.books[i].class_name;
    this.billnum = this.books[i].bill_num;
    this.boknum = this.books[i].book_num;
    this.bokcost = this.books[i].cost;
    this.bokremark = this.books[i].remark;
    
   

    // console.log("Finalnumber",this.usernumber);
    csv += [
      [this.accno],
      [this.barcodeid],
      [this.titles],
      [this.subjects],
      [this.authr],
      [this.publishr],
      [this.edition],
      [this.years],
      [this.pages],
      [this.topic],
      [this.isbns],
      [this.classname],
      [this.billnum],
      [this.boknum],
      [this.bokcost],
      [this.bokremark],
      
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
  Swal.fire('Hi! Books updated sucessfully');
}

successAlertNotification(){
  Swal.fire('Hi', ' Books Registered successfully', 'success')
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
