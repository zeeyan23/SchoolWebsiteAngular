import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import jspdf from "jspdf";
import html2canvas from "html2canvas";
// import * as jsPDF from 'jspdf';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import { HomeworkurlService } from "../../shared/services/homeworkurl.service";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from "@angular/common/http";
import { ClassurlService } from 'src/app/shared/services/classurl.service';

@Component({
  selector: "app-homeworklist",
  templateUrl: "./homeworklist.component.html",
  styleUrls: ["./homeworklist.component.css"],
})
export class HomeworklistComponent implements OnInit {
  closeResult: string;

  homeworks: any;
  homework: any;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  homeworkForm: FormGroup;
  imageSrc: string;
  printData: any = {};
  class_name: any;
  section: any;
  subject: any;
  homework_date: any;
  remark: any;
  dos: any;
  selectedFile: File;

  popoverTitle = 'Delete Homework';
  popoverMessage = 'Are you sure want to delete permanently?';
  confirmClicked = false;
  cancelClicked = false;
  studentsofclass: any;
  studentss: any;
  classmemo: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  homewrkdate: any;
  homwwrk: string;

  constructor(
    private homeserve: HomeworkurlService,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private clshh :ClassurlService
  ) {}

  ngOnInit(): void {
    

    this.homeworkForm = this.fb.group({
      class_name: ["", Validators.required],
      section: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      homework: ["", Validators.required],
      homework_date: ["", [Validators.required]],
      remark: ["", Validators.required],
      dos:["", Validators.required],
      homework_photo: [null],
      fileSource: ["", Validators.required],
    });


    this.gethomeworkDetails();  
    this.getclassDetails();

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
  }

  get f() {
    return this.homeworkForm.controls;
  }

  getclassDetails(){
    this.clshh.getClassDetails().subscribe((res: any) =>{
          console.log(res);
          this.classmemo = res;
          
        });
        console.log('class',this.classmemo);
        
      }


  gethomeworkDetails(){
    this.homeserve.gethomeworkDetails().subscribe((res: any) =>{
          console.log(res);
          this.homeworks = res;
          this.studentss = res;
          this.homewrkdate = this.studentss[0]['homework_date']
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.homeworks);
        
      }

      uploadFile(event) {
    

        const reader = new FileReader();
        
        this.selectedFile = <File>event.target.files[0];
         
          console.log(this.selectedFile);
      }


      Updatehomework(Id: any){

        var value = this.homeworkForm.value
        var formData: any = new FormData();
        formData.append('class_name', value.class_name);
      formData.append('section', value.section);
      // formData.append('startedYear', value.startedYear);
      formData.append('subject', value.subject);
      formData.append('homework_date', value.homework_date);
      formData.append('remark', value.remark);
      if(this.selectedFile != undefined){
      formData.append('homework_photo',this.selectedFile, this.selectedFile.name);
      }
      formData.append('homework', value.homework);
      
           
            
            console.log(formData);
    
        
    this.homeserve.Updatehomework(formData, Id).subscribe((res:any)=>  {
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


  openHomework(homeworkinfomodal, homework) {
    this.homework = homework;
    this.homwwrk = new Date(this.homewrkdate).toISOString().slice(0, -1)
	  homework.homework_date = this.homwwrk;
    this.modalService
      .open(homeworkinfomodal, { ariaLabelledBy: "modal-basic-title" })
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

  download() {
    var element = document.getElementById("table");
    html2canvas(element).then(canvas => {
      console.log(canvas);

      var imgData = canvas.toDataURL("image/png");
      var doc = new jspdf();

      var imgHeight = (canvas.height * 208) / canvas.width;

      doc.addImage(imgData, 0, 0, 208, imgHeight);
      doc.save("image.pdf");
    });
  }

  onSelect(selectedItem: any) {
    this.class_name=selectedItem.class_name;
    this.section=selectedItem.section;
    this.subject=selectedItem.subject;
    this.homework=selectedItem.homework;
    this.homework_date=selectedItem.homework_date;
    this.remark=selectedItem.remark;
    this.dos=selectedItem.dos;
    console.log("Selected item Id: ", selectedItem.class_name);
    setTimeout(() => {
      
    }, 1000);
    // You get the Id of the selected item here
}

  // @ViewChild('content') content: ElementRef;
  // public SavePDF(): void {
  //   let content=this.content.nativeElement;
  //   let doc = new jsPDF();
  //   let _elementHandlers =
  //   {
  //     '#editor':function(element,renderer){
  //       return true;
  //     }
  //   };
  //   doc.fromHTML(content.innerHTML,15,15,{

  //     'width':190,
  //     'elementHandlers':_elementHandlers
  //   });

  //   doc.save('test.pdf');
  // }

  simpleAlert(){
    Swal.fire('Hi! Homework updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Homework Registered successfully', 'success')
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

  deleteRow(Id): void{
    this.homeserve.deleteHomework(Id)//method name in your services.ts file
    .subscribe(data =>{
      this.homeworks =data;
    });
    for(let i = 0; i < this.homeworks.length; ++i){
      if (this.homeworks[i].id === Id) {
          this.homeworks.splice(i,1);
      }
  }

}


valueSelectedd(selectedclasss:String , selectedsectionn:String){
  this.studentsofclass=this.studentss;
  console.log('studentdata',this.studentsofclass);

  var filteredStudent = this.studentsofclass.filter(
    item => item.class_name == selectedclasss && item.section == selectedsectionn
  );
  
  this.homeworks = filteredStudent;
  
  console.log('result', this.studentsofclass)
}

}
