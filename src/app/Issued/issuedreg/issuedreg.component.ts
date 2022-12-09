import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { IssuedurlService } from "../issuedurl.service";
import { BookService } from "src/app/book/book.service";
import { StudenturlService } from "src/app/shared/services/studenturl.service";

@Component({
  selector: "app-issuedreg",
  templateUrl: "./issuedreg.component.html",
  styleUrls: ["./issuedreg.component.css"],
})
export class IssuedregComponent implements OnInit {
  issuebookForm: FormGroup;
  bookdata: any;
  selectedaccno: any;
  bookdatas: any;
  titles: any;
  authors: any;
  subjects: any;
  publishers: any;
  students: any;
  selectedreg: any;
  studentss: any;
  studentname: any;
  classname: any;
  contactnumber: any;
  fathername: any;
  isDean: boolean;
  public issuesies :any[]=[];
  constructor(private fb: FormBuilder,private bookserve: BookService,private studentserve :StudenturlService,  private issuedserve : IssuedurlService) {}

  ngOnInit(): void {
    this.issuebookForm = this.fb.group({

      issuedate: ["", Validators.required],
      sr_no: ["", [Validators.required]],
      accession_no: ["", [Validators.required]],
      // admission_no: ["", Validators.required],
      studentname: ["", [Validators.required]],
      class_name: ["", Validators.required],
      roll_no: ["", Validators.required],
      father_name: ["", Validators.required],
      contact_num: ["", Validators.required],
      remark: ["", Validators.required],
      title: ["", Validators.required],
      author: ["", Validators.required],
      subject: ["", Validators.required],
      publisher: ["", Validators.required],
      book_status: ["", Validators.required],
      
      issuesies: this.fb.array([]),
    });
    this.getbookDetails();
    this.getStudentDetails();

    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
    }
    else{
    this.isDean = false;
}
  }



  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.issuesies.push({
      id: this.issuesies.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.issuesies.splice(i, 1);
  }

  getbookDetails(){
    this.bookserve.getbookDetails().subscribe((res: any) =>{
          console.log(res);
          this.bookdata = res;
         
        });
        console.log('reeeeeeeeeee',this.bookdata);
        
      }
  getStudentDetails(){
        this.studentserve.getStudentDetails().subscribe((res: any) =>{
              console.log(res);
              this.students = res;
            });
            console.log('reeeeeeeeeee',this.students);
            
          }

valueSelected() {
// alert(this.selectedclass);
var bookList = this.bookdata;

console.log(bookList);
console.log(this.selectedaccno);
console.log(typeof(this.selectedaccno));

this.bookdatas=this.bookdata.filter(
item => item.accession_number == Number(this.selectedaccno)
);
this.titles = this.bookdatas[0]['title'];
this.authors = this.bookdatas[0]['author'];
this.subjects = this.bookdatas[0]['subject'];
this.publishers = this.bookdatas[0]['publisher'];

console.log('feee',this.titles);
}

valueSelectedd() {
  // alert(this.selectedclass);
  var studentList = this.students;
  
  console.log(studentList);
  console.log(this.selectedreg);
  console.log(typeof(this.selectedreg));
  
  this.studentss=this.students.filter(
  item => item.reg_number == Number(this.selectedreg)
  );
  this.studentname = this.studentss[0]['student_name'];
  this.classname = this.studentss[0]['class_name'];
  this.contactnumber = this.studentss[0]['contact_num'];
  this.fathername = this.studentss[0]['father_name'];
  
  console.log('feee1',this.studentname);
  }






  submitForm(){
   
    // console.log(this.studentregForm.value);
    var value = this.issuebookForm.value
    
  
    var formData: any = new FormData();
        formData.append('issuedate', value.issuedate);
        formData.append('sr_no', value.sr_no);
        // formData.append('startedYear', value.startedYear);
        formData.append('accession_no', value.accession_no);
        // formData.append('admission_no', value.admission_no);
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
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.issuedserve.Regissue(formData).subscribe((res:any)=>  {
        console.log(res)

        if(this.issuesies.length > 0){
          for(let i=0; i<this.issuesies.length; i++){    
            const extraData = {
              issued: res.id,
              name: this.issuesies[i].name,
              value: this.issuesies[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.issuedserve.Regaddmoreissue(extraData).subscribe((res:any)=>  {
              console.log(res)
            
          });
          }
        }
       
        this.successAlertNotification()
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
    simpleAlert(){
      Swal.fire('Hi !Book Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Book Issued successfully', 'success')
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
