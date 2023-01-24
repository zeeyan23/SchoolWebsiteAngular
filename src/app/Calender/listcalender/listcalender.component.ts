import { CalenderurlService } from '../calenderurl.service';
import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';


@Component({
  selector: 'app-listcalender',
  templateUrl: './listcalender.component.html',
  styleUrls: ['./listcalender.component.css']
})
export class ListcalenderComponent implements OnInit {

  popoverTitle = 'Delete Class';
  popoverMessage = 'Are you sure want to delete Permanently?';
  confirmClicked = false;
  cancelClicked = false;


  totalRec: number;
  page: number = 1;
  loading = false;
  term:any;
  classroomData: any;
  classes: any;
  classess: { id: string; Maths: boolean; class_name: string; computer: boolean; english: boolean; hindi: boolean; kannada: boolean; pt: boolean; science: boolean; section: string; social_science: boolean; teachers: string; }[];
  classesofschool: any;
  closeResult: string;

  isDean: boolean;
  calender: any;
  calenders: any;
  cal: any;
  addeventForm: any;
  startd: any;
  endd: any;
  startdt: string;
  enddt: string;


 

  constructor(private calserve : CalenderurlService, private modalService: NgbModal,private fb: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.addeventForm = this.fb.group({
       
      startdate:['',Validators.required],
      titlee: ['',[Validators.required]],
      enddate:['']
      });
    
    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
    this.getCalDetails();
   }


  deleteRow(Id): void{
    this.calserve.deleteCalendar(Id)//method name in your services.ts file
    .subscribe(data =>{
      this.calender =data;
    });
    for(let i = 0; i < this.calender.length; ++i){
      if (this.calender[i].id === Id) {
          this.calender.splice(i,1);
      }
  }

}


valueSelected(selecteddate:String){
  this.classesofschool =this.calenders;
  console.log('studentdata',this.calender);

  var filteredclass =this.classesofschool.filter(
    item => item.startdate == selecteddate);
  this.calender = filteredclass;
  console.log('result',this.calender)
}



getCalDetails(){
  this.calserve.getcalendarDetails().subscribe((res: any) =>{
        console.log(res);
        this.calender = res;
        this.calenders= res;
        // this.studentss = res;
        // this.studentId = this.students[0]["id"];
        this.startd = this.calenders[0]["startdate"];
        this.endd = this.calenders[0]["enddate"];
      });
      console.log('reeeeeeeeeee',this.calender);
      
    }
    openclass(classinfomodal, cal) {
      console.log("id iss:", cal);
      this.cal = cal;
      this.startdt = new Date(this.startd).toISOString().slice(0, -1)
      this.enddt = new Date(this.endd).toISOString().slice(0, -1)
      cal.startdate =this.startdt;
      cal.enddate =this.enddt;
      this.modalService
        .open(classinfomodal, { ariaLabelledBy: "modal-basic-title" })
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


    Updatecal(Id: any){

      var value = this.addeventForm.value
      var formData: any = new FormData();
      formData.append('startdate', value.startdate);
      formData.append('enddate', value.enddate);
      formData.append('titlee', value.titlee);
 
  
      
  this.calserve.Updatecal(formData, Id).subscribe((res:any)=>  {
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
  simpleAlert(){
    Swal.fire('Hi! Calendar updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Calendar Registered successfully', 'success')
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
