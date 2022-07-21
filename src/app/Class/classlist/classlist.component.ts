import { ClassurlService } from '../../shared/services/classurl.service';
import { Component, OnInit } from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';


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
  science: any;
  section: any;
  social_science: any;
  teacher: any;
  classroomData: any;
  classes: any;
  classess: { id: string; Maths: boolean; class_name: string; computer: boolean; english: boolean; hindi: boolean; kannada: boolean; pt: boolean; science: boolean; section: string; social_science: boolean; teachers: string; }[];
  classesofschool: any;
  closeResult: string;
  classs: any;
  classForm: any;
  isDean: boolean;


 

  constructor(private classserve : ClassurlService, private modalService: NgbModal,private fb: FormBuilder) { }

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
      computer:[''],
      pt:[''],
      teachers:['',[Validators.required]]
     
    });
    
    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
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
    item => item.class_name == selectedclass || item.teachers == selectedteacher
  );
  this.classes = filteredclass;
  console.log('result',this.classes)
}



getStaffDetails(){
  this.classserve.getClassDetails().subscribe((res: any) =>{
        console.log(res);
        this.classes = res;
        this.classess= res;
        // this.studentss = res;
        // this.studentId = this.students[0]["id"];
      });
      console.log('reeeeeeeeeee',this.classes);
      
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
    Swal.fire('Hi !Staff updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Staff Registered successfully', 'success')
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
      footer: '<a href>Why do I have this issue?</a>'  
    })  
  } 
  



  

}
