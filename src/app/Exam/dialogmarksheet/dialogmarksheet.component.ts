import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExamurlService } from '../examurl.service';
import * as _html2canvas from "html2canvas";
import { UntypedFormBuilder, Validators } from '@angular/forms';
const html2canvas: any = _html2canvas;
@Component({
  selector: 'app-dialogmarksheet',
  templateUrl: './dialogmarksheet.component.html',
  styleUrls: ['./dialogmarksheet.component.css']
})
export class DialogmarksheetComponent implements OnInit {
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

  constructor(private examserve:ExamurlService ,private fb:UntypedFormBuilder,public dialogRef: MatDialogRef<DialogmarksheetComponent>,@Inject(MAT_DIALOG_DATA) public data :any) { 
    // this.student_data = this.examserve.Exam;
    this.id=data;
  }

  ngOnInit(): void {

    this.addmarksheetForm = this.fb.group({
       
      student_name:['',Validators.required],
      class_name: ['',[Validators.required]],
      Roll_no: ['',[Validators.required]],
      maths_max_marks: ['',Validators.required],
      maths_obt_mark: ['',[Validators.required]],
      maths_min_mark: ['',Validators.required],
      maths_tot_mark: ['',Validators.required],
      maths_percentg: ['',Validators.required],
      english_max_marks: ['',Validators.required],
      english_obt_mark:['',Validators.required],
      english_min_mark:['',Validators.required],
      english_tot_mark:['',Validators.required],
      english_percentg:['',Validators.required],
      science_max_mark:['',Validators.required],
      science_obt_mark:['',Validators.required],
      science_min_mark:['',Validators.required],
      science_tot_mark:['',Validators.required],
      science_percentg:['',Validators.required],
      hindi_max_mark:['',Validators.required],
      hindi_obt_mark:['',Validators.required],
      hindi_min_mark:['',Validators.required],
      hindi_tot_mark:['',Validators.required],
      hindi_percentg:['',Validators.required],
      social_max_mark:['',Validators.required],
      social_obt_mark:['',Validators.required],
      social_min_mark:['',Validators.required],
      social_tot_mark:['',Validators.required],
      social_percentg:['',Validators.required],
      kannada_max_mark:['',Validators.required],
      kannada_obt_mark:['',Validators.required],
      kannada_min_mark:['',Validators.required],
      kannada_tot_mark:['',Validators.required],
      kannada_percentg:['',Validators.required],
      computer_max_mark:['',Validators.required],
      computer_obt_mark:['',Validators.required],
      computer_min_mark:['',Validators.required],
      computer_tot_mark:['',Validators.required],
      computer_percentg:['',Validators.required],

      bookies: this.fb.array([]) ,
    });

    this.getmarkbyid(this.id)
  }


  getmarkbyid(id){
    this.examserve.getmarkbyid(id).subscribe((res: any) =>{
          console.log(res);
          this.mathsmax = res['maths_max_marks']
          this.mathsobt = res['maths_obt_mark']
          this.mathsmin = res['maths_min_mark']
          this.mathstot = res['maths_tot_mark']
          this.mathsper = res['maths_percentg']
          this.englishmax = res['english_max_marks']
          this.englishobt = res['english_obt_mark']
          this.englishmin = res['english_min_mark']
          this.englishtot = res['english_tot_mark']
          this.englishper = res['english_percentg']
          this.seincemax = res['science_max_mark']
          this.seinceobt = res['science_obt_mark']
          this.seincemin = res['science_min_mark']
          this.seincetot = res['science_tot_mark']
          this.seinceper = res['science_percentg']
          this.hindimax = res['hindi_max_mark']
          this.hindiobt = res['hindi_obt_mark']
          this.hindimin = res['hindi_min_mark']
          this.hinditot = res['hindi_tot_mark']
          this.hindiper = res['hindi_percentg']
          this.socialmax = res['social_max_mark']
          this.socialobt = res['social_obt_mark']
          this.socialmin = res['social_min_mark']
          this.socialtot = res['social_tot_mark']
          this.socialper = res['social_percentg']
          this.kannadamax = res['kannada_max_mark']
          this.kannadobt = res['kannada_obt_mark']
          this.kannadmin = res['kannada_min_mark']
          this.kannadtot = res['kannada_tot_mark']
          this.kannadper = res['kannada_percentg']
          this.compmax = res['computer_max_mark']
          this.compobt = res['computer_obt_mark']
          this.compmin = res['computer_min_mark']
          this.comptot = res['computer_tot_mark']
          this.compper = res['computer_percentg']
          
          
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
