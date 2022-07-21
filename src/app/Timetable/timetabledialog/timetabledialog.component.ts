import { Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
import { TimetableurlService } from '../timetableurl.service';
import * as _html2canvas from "html2canvas";
const html2canvas: any = _html2canvas;



@Component({
  selector: 'app-timetabledialog',
  templateUrl: './timetabledialog.component.html',
  styleUrls: ['./timetabledialog.component.css']
})
export class TimetabledialogComponent implements OnInit {
  Temptimetable: any;
  classname: any;
  section: any;
  timetable: any;
  @ViewChild('screen') screen: ElementRef;
  
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('downloadLink') downloadLink: ElementRef;
  times: any;
  id: any;

  constructor(private timeserve: TimetableurlService, public dialogRef: MatDialogRef<TimetabledialogComponent>,@Inject(MAT_DIALOG_DATA) public data: any) { 
    this.data=data;
  }

  ngOnInit(): void {
  //  this.getStudentDetails(this.id);
  console.log(this.data);
  }


  // getStudentDetails(id){
  //   this.timeserve.getaddmorebyidtimetableDetails(id).subscribe((res: any) =>{
  //         console.log(res);
  //         this.times = res;
  //         console.log('aaaaaaaaaaaa', this.times)
          
  //       });
     
        
  //     }

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
}
