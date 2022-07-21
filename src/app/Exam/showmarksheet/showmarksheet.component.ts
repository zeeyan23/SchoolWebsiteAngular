import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {ExamurlService} from "./../examurl.service";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogmarksheetComponent } from '../dialogmarksheet/dialogmarksheet.component';


import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-showmarksheet',
  templateUrl: './showmarksheet.component.html',
  styleUrls: ['./showmarksheet.component.css']
})
export class ShowmarksheetComponent implements OnInit {

  closeResult: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  
  examForm: FormGroup;
 
  exam: any;
  examname: string;
  startdate: string;
  enddate: string;
  totalmarks: string;
  hours: string;
  classes: string;
  exams: { student_name: string; maths_total: string; english_total: string; science_total: string; hindi_total: string; social_total: string; kannada_total: string; computer_total: string; }[];
  studentsofclass: any;
  examtab: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
 



  constructor(
    private fb: FormBuilder,
    private examserve: ExamurlService,
    public matDialog: MatDialog
  ) {
    this.exams = new Array<any>();
  }

  ngOnInit(): void {

    

    this.examForm = this.fb.group({
      exam_name: ["", Validators.required],
      start_date: ["", [Validators.required]],
      end_date:["", [Validators.required]],
      Total_marks: ["", [Validators.required]],
      hour: ["", [Validators.required]],
      class: ["", [Validators.required]],
      // examies: this.fb.array([]),
    });

    this.getmarkDetails();
    
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


  getmarkDetails(){
    this.examserve.getmarkDetails().subscribe((res: any) =>{
          console.log(res);
          this.exams = res;
          this.examtab = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.exams);
        
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
  const modalDialog = this.matDialog.open(DialogmarksheetComponent, dialogConfig)
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

    this.exams = this.examserve.Mark;

    console.log("student list:",this.exams);
    for (let i = 0; i < this.exams.length; ++i) {
      this.examname = this.exams[i].student_name;
      this.startdate = this.exams[i].maths_total;
      this.enddate = this.exams[i].english_total;
      this.totalmarks = this.exams[i].science_total;
      this.hours = this.exams[i].hindi_total;
      this.classes = this.exams[i].social_total;
      

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


  valueSelectedd(selectedname:String , selectedclasss:String){
    this.studentsofclass=this.examtab;
    console.log('studentdata',this.studentsofclass);
  
    var filteredStudent = this.studentsofclass.filter(
      item => item.student_name == selectedname && item.class_name == selectedclasss
    );
    
    this.studentsofclass = filteredStudent;
    this.exams = this.studentsofclass;
    console.log('result', this.studentsofclass)
 }
 

}



