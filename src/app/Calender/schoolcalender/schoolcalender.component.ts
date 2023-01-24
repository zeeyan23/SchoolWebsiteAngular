import{CalenderurlService} from '../calenderurl.service'
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  AfterViewInit,
} from '@angular/core';
import {  CalendarEvent, CalendarView } from 'angular-calendar';
import startOfDay from 'date-fns/startOfDay/index';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-schoolcalender',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './schoolcalender.component.html',
  styleUrls: ['./schoolcalender.component.css']
})
export class SchoolcalenderComponent implements AfterViewInit  {
  caldata: any=[];
  addeventForm: UntypedFormGroup;
  startdate: string;
  viewDate: Date = new Date();
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  events: any[] = [];
  isDean: boolean;
  


  constructor(private fb:UntypedFormBuilder ,private router: Router,private calendersss : CalenderurlService,public datepipe: DatePipe) { 

  }

  



  ngOnInit(): void {

   
    this.getcalDetails();


  
    this.addeventForm = this.fb.group({
       
      startdate:['',Validators.required],
      titlee: ['',[Validators.required]],
      enddate:['']
      });


      if(localStorage.getItem('group') == 'admin'  ) {
        this.isDean = true;
      }
       else{
        this.isDean = false;
     }
      }

       ngAfterViewInit(){
      

       }

  getcalDetails(){
   
  
    this.calendersss.getcalendarDetails().subscribe((res: any) =>{
      console.log(res);
      this.caldata = res;
      // this.studentss = res;
      // this.studentId = this.students[0]["id"];
      this.getCalendarData(res);
    });
    console.log('reeeeeeeeeee',this.caldata);
      
      }
     
  getCalendarData(caldata) {
  
    this.events = [];
    caldata.forEach(x=> { 
      let startDate = new Date(x["startdate"])
      let endDate = new Date(x["enddate"])
      this.events.push(
        {
          start:  new Date(this.datepipe.transform(startDate, 'yyyy-MM-dd')),
          end: new Date(this.datepipe.transform(endDate, 'yyyy-MM-dd')),
          title:x["titlee"]
        }
        
        /* {
          start: new Date( x["startdate"]),
          end:new Date( x["enddate"]),
          title:x["titlee"]
        } */
        )
        console.log('events',this.events);
       
      });
 
   
  }
  
  setView(view: CalendarView) {
    this.view = view;
  }

  // events: CalendarEvent[] = [
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'First event',
  //   },
  //   {
  //     start: startOfDay(new Date()),
  //     title: 'Second event',
  //   }
  // ]


  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    console.log(date);
    //let x=this.adminService.dateFormat(date)
    //this.openAppointmentList(x)
  }
  // Saveevent(value) {  
  //   this.calendersss.Saveevent(value);  
  //   this.getCalendarData();
  //   // this.router.navigate(['calender/schoolcalender']);
  // } 

  submitForm(){
   
    // console.log(this.studentregForm.value);
    var value = this.addeventForm.value
    
  
    var formData: any = new FormData();
        formData.append('startdate', value.startdate);
        formData.append('enddate', value.enddate);
        // formData.append('startedYear', value.startedYear);
        formData.append('titlee', value.titlee);
      
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.calendersss.Regcalendar(formData).subscribe((res:any)=>  {
        console.log(res)
       
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
      Swal.fire('Hi Welcome! Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Calender Registered successfully', 'success')
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
