import { Component, OnInit } from '@angular/core';
import {ExamurlService} from "./../examurl.service";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { UntypedFormGroup, UntypedFormBuilder, Validators } from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ExamdialogComponent } from '../examdialog/examdialog.component';


@Component({
  selector: 'app-listexam',
  templateUrl: './listexam.component.html',
  styleUrls: ['./listexam.component.css']
})
export class ListexamComponent implements OnInit {

  closeResult: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  
  examForm: UntypedFormGroup;
  
  exam: any;
  examname: string;
  startdate: string;
  enddate: string;
  totalmarks: string;
  hours: string;
  classes: string;
  examtab: any;
  exams: any;
  examsofschool: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  constructor(
    private fb: UntypedFormBuilder,
    private examserve: ExamurlService,
    public matDialog: MatDialog
  ) {}

  ngOnInit(): void {

    this.examForm = this.fb.group({
      exam_name: ["", Validators.required],
      start_date: ["", [Validators.required]],
      end_date:["", [Validators.required]],
      Total_marks: ["", [Validators.required]],
      hour: ["", [Validators.required]],
      class_name: ["", [Validators.required]],
      // examies: this.fb.array([]),
    });
    this.getexamDetails();
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
   if( localStorage.getItem('group') == 'staff' ) {
  this.isStaff = true;
 }
 else{
  this.isStaff = false;
 }
 if(localStorage.getItem('group') == 'parents') {
  this.isParent =true;
}
else{
this.isParent =false;
}
  }


  getexamDetails(){
    this.examserve.getexamDetails().subscribe((res: any) =>{
          console.log(res);
          this.exams = res;
          this.examtab = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.exams);
        
      }

      


      Updateexam(Id: any){

        var value = this.examForm.value
        var formData: any = new FormData();
        formData.append('exam_name', value.exam_name);
        formData.append('start_date', value.start_date);
        // formData.append('startedYear', value.startedYear);
        formData.append('end_date', value.end_date);
        formData.append('Total_marks', value.Total_marks);
        formData.append('hour', value.hour);
        formData.append('class_name', value.class_name);
        
       
            
            console.log(formData);
    
        
    this.examserve.Updatexam(formData, Id).subscribe((res:any)=>  {
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
  
    openModal(id): void  {
      const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    
    console.log("driver id",id)
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "1000px";
    dialogConfig.width = "1700px";
    dialogConfig.data = id;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ExamdialogComponent, dialogConfig)
    } 
  

  download() {
    let fileName = "ExamList.csv";
    let columnNames = [
      "Exam Name",
      "Start date",
      "End date",
      "Total marks",
      "Hours",
      "classes"
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

 

    console.log("student list:",this.exams);
    for (let i = 0; i < this.exams.length; ++i) {
      this.examname = this.exams[i].exam_name;
      this.startdate = this.exams[i].start_date;
      this.enddate = this.exams[i].end_date;
      this.totalmarks = this.exams[i].Total_marks;
      this.hours = this.exams[i].hour;
      this.classes = this.exams[i].class_name;
      

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.examname],
        [this.startdate],
        [this.enddate],
        [this.totalmarks],
        [this.hours],
        [this.classes],
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
    Swal.fire('Hi! Exam Data updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Exam Data Registered successfully', 'success')
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
    this.examsofschool=this.examtab;
    console.log('studentdata',this.exams);
  
    var filteredexam = this.examsofschool.filter(
      item => item.class_name == selectedclasss
    );
    this.exams = filteredexam;
    console.log('result', filteredexam)
 }

}
