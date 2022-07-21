import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExamurlService } from '../examurl.service';
import * as _html2canvas from "html2canvas";
import { FormBuilder, Validators } from '@angular/forms';
const html2canvas: any = _html2canvas;

@Component({
  selector: 'app-examdialog',
  templateUrl: './examdialog.component.html',
  styleUrls: ['./examdialog.component.css']
})
export class ExamdialogComponent implements OnInit {

  student_data: any;
  exams: { exam_name: string; start_date: string; end_date: string; Total_marks: string; hour: string; class: string; }[];

 @ViewChild('screen') screen: ElementRef;
  
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  student_name: any;
  addmarksheetForm: any;
  id: any;
  mathsmax: any;
  mathsobt: any;
  mathsmin: any;
  mathstot: any;
  mathsper: any;
  englishmax: any;
  englishobt: any;
  englishmin: any;
  englishtot: any;
  englishper: any;
  seincemax: any;
  seinceobt: any;
  seincemin: any;
  seincetot: any;
  seinceper: any;
  hindimax: any;
  hindiobt: any;
  hindimin: any;
  hindiper: any;
  hinditot: any;
  socialmax: any;
  socialobt: any;
  socialmin: any;
  socialtot: any;
  socialper: any;
  kannadamax: any;
  kannadobt: any;
  kannadmin: any;
  kannadtot: any;
  kannadper: any;
  compmax: any;
  compobt: any;
  compmin: any;
  comptot: any;
  compper: any;
  totmarks: any;
  hour: any;
  classname: any;
  examname: any;
  startdate: any;
  enddate: any;

  constructor(private examserve:ExamurlService ,private fb:FormBuilder,public dialogRef: MatDialogRef<ExamdialogComponent>,@Inject(MAT_DIALOG_DATA) public data :any) { 
    // this.student_data = this.examserve.Exam;
    this.id=data;
  }

  ngOnInit(): void {

    this.addmarksheetForm = this.fb.group({
       
      student_name:['',Validators.required],
      class_name: ['',[Validators.required]],
      Roll_no: ['',[Validators.required]],
      
    });

    this.getexambyidDetails(this.id)
  }


  getexambyidDetails(id){
    this.examserve.getexambyidDetails(id).subscribe((res: any) =>{
          console.log(res);
          this.examname = res['exam_name']
          this.startdate = res['start_date']
          this.enddate = res['end_date']
          this.totmarks = res[ 'Total_marks']
          this.hour = res[ 'hour']
          this.classname = res[ 'class_name']
          console.log('saaa',this.mathsmax)
          
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.student_data);
        
      }

  

  closeModal() {
      this.dialogRef.close();
    }
     downloadImage(){
    console.log('..........',this.screen);
    // console.log('...', this.screen)
  
    html2canvas(this.screen.nativeElement).then(canvas => {
      this.canvas.nativeElement.src = canvas.toDataURL();
      this.downloadLink.nativeElement.href = canvas.toDataURL('image/png');
      this.downloadLink.nativeElement.download = 'marble-diagram.png';
      this.downloadLink.nativeElement.click();
    });
  }

  onSubmit(){
    
  }
}



