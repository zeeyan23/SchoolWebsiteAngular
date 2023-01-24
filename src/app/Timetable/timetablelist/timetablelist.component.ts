import { Component, OnInit } from '@angular/core';
import { TimetableurlService } from './../timetableurl.service';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { TimetabledialogComponent } from '../timetabledialog/timetabledialog.component';
@Component({
  selector: 'app-timetablelist',
  templateUrl: './timetablelist.component.html',
  styleUrls: ['./timetablelist.component.css']
})
export class TimetablelistComponent implements OnInit {
  
  timetables:any[];
  closeResult: string;
  class: any;
  section: any;
  date: any;
  tablelist: any[] = [];
  timetabless: any;
  timetablesss: { class: string; section: string; date: string; tablelist: { from_time: string; to_time: string; monday: string; Tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; }[]; }[];
  timetabForm: any;
  timetable: any;
  tableofschool: any;
  Temptimetable: { class_name: string; section: string; timetable_date: string; periods: { from_time: string; to_time: string; monday: string; Tuesday: string; wednesday: string; thursday: string; friday: string; saturday: string; }[]; }[];
  dialog: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  times: any;
  age: number = 1;
  loading = false;
  staff: any;
  term: any;

  constructor(private timeserve: TimetableurlService,private fb:UntypedFormBuilder, private modalService: NgbModal, public matDialog: MatDialog,) {
    this.timetabForm = this.fb.group({
       
      class_name:['',Validators.required],
      section:['',Validators.required],
      timetable_date:['',Validators.required],
      from_time:['',Validators.required],
      to_time: ['',[Validators.required]],
      monday: ['',[Validators.required]],
      Tuesday: ['',Validators.required],
      wednesday: ['',[Validators.required]],
      thursday: ['',Validators.required],
      friday: ['',Validators.required],
      saturday: ['',Validators.required],
      periods: this.fb.array([]) ,
    });

   }

  ngOnInit(): void {

    this.Temptimetable=this.timeserve.Timetable;
    console.log('timeeeeee' ,this.timetablesss);
    // this.class=this.timetablesss['class'];
    // this.section=this.timetables.section;
    // this.date=this.timetable.date;

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
 if(localStorage.getItem('group') == 'parents') {
  this.isParent =true;
}
else{
this.isParent =false;
}
 
this.getStudentDetails();
  }

  getStudentDetails(){
    this.timeserve.getbothtimetableDetails().subscribe((res: any) =>{
          console.log(res);
          this.times = res;
         
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
          // this.dob = this.staffss[0]["dob"];
          // this.doj = this.staffss[0]["doj"];
          console.log('aaaaaaaaaaaa', this.times)
          
        });
     
        
      }

  // getStudentDetails(){
  //   this.timeserve.gettimetableDetails().subscribe((res: any) =>{
  //         console.log(res);
  //         this.timetablesss = res;
  //         this.timetable= res;
  //         // this.studentss = res;
  //         // this.studentId = this.students[0]["id"];
  //       });
  //       console.log('reeeeeeeeeee',this.timetablesss);
        
  //     }

      valueSelectedd(selectedclasss:String){
        this.tableofschool=this.timetable;
        // console.log('studentdata',this.exams);
      
        var filteredexam = this.tableofschool.filter(
          item => item.class_name == selectedclasss
        );
        this.timetablesss = filteredexam;
        console.log('result', filteredexam)
     }

 

    //   Updatestaff(Id: any){

    //     var value = this.timetabForm.value
    //     var formData: any = new FormData();
    //     formData.append('Tuesday', value.Tuesday);
    //     formData.append('class_name', value.class_name);
    //     formData.append('friday', value.friday);
    //     formData.append('from_time', value.from_time);
    //     formData.append('monday', value.monday);
    //     formData.append('saturday', value.saturday);
    //     formData.append('section', value.section);
    //     formData.append('thursday', value.thursday);
    //     formData.append('timetable_date', value.timetable_date);
    //     formData.append('to_time', value.to_time);
    //     formData.append('wednesday', value.wednesday);
    //     formData.append('periods', value.periods); 
            
    //         console.log(formData);
    
        
    // this.timeserve.Updatetimetable(formData, Id).subscribe((res:any)=>  {
    //   console.log(res);
        
    //   this.simpleAlert()
      
      
    // },(error:HttpErrorResponse)=>{
    //   this.erroalert();
    //   console.log(error);

     
      
    // });
  

    
    // }
    openDialog(timetables): void  {
      const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    
    console.log("driver id",timetables)
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "1000px";
    dialogConfig.width = "1700px";
    dialogConfig.data = timetables;
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(TimetabledialogComponent, dialogConfig)
    } 
  


  openHomework(timetableinfomodal, timetables) {
    console.log(timetableinfomodal, timetables)
    this.timetables = timetables;
    // this.tablelist = timetabless.tablelist;
   
    this.modalService
      .open(timetableinfomodal, { ariaLabelledBy: "modal-basic-title" })
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

  simpleAlert(){
    Swal.fire('Hi! Timetable2 updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Registered successfully', 'success')
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
