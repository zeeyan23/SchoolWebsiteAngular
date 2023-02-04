import { ClassurlService } from '../../shared/services/classurl.service';
import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { UntypedFormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { StaffurlService } from 'src/app/shared/services/staffurl.service';


@Component({
  selector: 'app-classlist',
  templateUrl: './classlist.component.html',
  styleUrls: ['./classlist.component.css']
})
export class ClasslistComponent implements OnInit {

  popoverTitle = 'Delete Class';
  popoverMessage = 'Are you sure want to delete Permanently?';
  confirmClicked = false;
  cancelClicked = false;


  totalRec: number;
  page: number = 1;
  loading = false;
  term:any;
 
  Maths: any;
  class_name: any;
  computer: any;
  english: any;
  hindi: any;
  kannada: any;
  pt: any;
  drawing: any;
  evs: any;
  lib: any;
  gk: any;
  science: any;
  section: any;
  social_science: any;
  teacher: any;
  classroomData: any;
  classes: any;
  classess: any[] = [];
  classesofschool: any;
  closeResult: string;
  classs: any;
  classForm: any;
  isDean: boolean;
  staffs: any;


 

  constructor(private classserve : ClassurlService, private modalService: NgbModal, private staffService: StaffurlService, private fb: UntypedFormBuilder) { }

  ngOnInit(): void {

    this.classForm = this.fb.group({
       
      class_name:['',Validators.required],
      section: ['',[Validators.required]],
      english:[''],
      hindi:[''],
      kannada:[''],
      Maths:[''],
      science:[''],
      social_science:[''],
      pt:[''],
      drawing: [''],
      evs: [''],
      lib: [''],
      gk: [''],
      computer:[''],

      teachers:['',[Validators.required]]
     
    });
    
    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
    this.getClassDetails();
    this.getStaffDetails();
   }



  deleteRow(Id): void{
    this.classserve.deleteClass(Id)//method name in your services.ts file
    .subscribe(data =>{
      this.classes =data;
    });
    for(let i = 0; i < this.classes.length; ++i){
      if (this.classes[i].id === Id) {
          this.classes.splice(i,1);
      }
  }

}


valueSelected(selectedclass:String , selectedteacher:String){
  this.classesofschool =this.classess;
  console.log('studentdata',this.classes);

  var filteredclass =this.classesofschool.filter(
    item => item.class_name == selectedclass || item.teachers.staff_name == selectedteacher
  );
  this.classes = filteredclass;
  console.log('result',this.classes)
}

getStaffDetails(){
  this.staffService.getStaffDetails().subscribe((res: any) =>{
        this.staffs = res;
      });
      
    }

getClassDetails(){
  this.classserve.getClassDetails().subscribe((res: any) =>{
        console.log(res);
        this.classes = res;
        this.classess= res;
        // this.studentss = res;
        // this.studentId = this.students[0]["id"];
      });
      console.log('reeeeeeeeeee',this.classes);
      
    }

    getSubject(selectedClass){
      console.log(selectedClass);
      var subjects = [];
      if(selectedClass.Maths) {
        subjects.push('Maths')
      }
      if(selectedClass.english) {
        subjects.push('English')
      }
      if(selectedClass.hindi) {
        subjects.push('Hindi')
      }
      if(selectedClass.kannada) {
        subjects.push('Kannada')
      }
      if(selectedClass.science) {
        subjects.push('Science')
      }
      if(selectedClass.social_science) {
        subjects.push('Social Science')
      }
      if(selectedClass.drawing) {
        subjects.push('Drawing')
      }
      if(selectedClass.evs) {
        subjects.push('EVS')
      }
      if(selectedClass.lib) {
        subjects.push('Lib')
      }
      if(selectedClass.gk) {
        subjects.push('GK')
      }
      if(selectedClass.computer) {
        subjects.push('Computer')
      }
      if(selectedClass.pt) {
        subjects.push('Physical Training')
      }

      if(subjects){
        // make array
        // convert array to string
        let subjectString = subjects.toString();
        // replace comma with newline
        let triggeredModel = subjectString.replace(/,/g, '<br>');
        return triggeredModel
      } else {
        return subjects
      }
    }

    openclass(classinfomodal, classs) {
      console.log("id iss:", classs);
      this.classs = classs;
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


    Updateclass(Id: any){

      var value = this.classForm.value
      var formData: any = new FormData();
      formData.append('class_name', value.class_name);
      formData.append('section', value.section);
      formData.append('english', value.english);
      formData.append('hindi', value.hindi);
      formData.append('kannada', value.kannada);
      formData.append('Maths', value.Maths);
      formData.append('science', value.science);
      formData.append('social_science', value.social_science);
      formData.append('computer', value.computer);
      formData.append('drawing', value.drawing);
      formData.append('evs', value.evs);
      formData.append('lib', value.lib);
      formData.append('gk', value.gk);
      formData.append('pt', value.pt);
      formData.append('teachers', value.teachers);
 
  
      
  this.classserve.Updateclass(formData, Id).subscribe((res:any)=>  {
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
    Swal.fire('Hi! Class updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Class Registered successfully', 'success')
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
