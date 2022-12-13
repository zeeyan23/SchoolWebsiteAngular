import { StaffurlService } from "../../shared/services/staffurl.service";
import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { Staffdata } from "../staffdata";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: "app-stafflist",
  templateUrl: "./stafflist.component.html",
  styleUrls: ["./stafflist.component.css"],
})
export class StafflistComponent implements OnInit {

  closeResult: string;
  regnos: string;
  stfname: string;
  subj: string;
  phne: string;
  mail: string;
  qualgctin: string;
  staffdetails: Staffdata[];
  staffForm: FormGroup;
  totalRec: number;
  page: number = 1;
  loading = false;
  staff: any;
  term: any;
 
  fathrnm: string;
  mothrnm: string;
  phn: string;
  eml: string;
  qlfcn: string;
  dj: string;
  sbj: string;
  ye: string;
  stfp: string;
  staffss: { age: string; designation: string; dob: string; doj: string; email: string; father_name: string; fileSource: string; gendar: string; mothers_name: string; phone: string; qualification: string; reg_num: string; subject: string; yoe: string; staff_name: string; staff_photo: string; }[];
  selectedFile: any;

  popoverTitle = 'Delete Staff';
  popoverMessage = 'Are you sure want to delete Permanently?';
  confirmClicked = false;
  cancelClicked = false;
  staffs: any;
  staffsofclass: any;
  isDean: boolean;
  dob: string;
  doj: string;
  dobs: string;
  dojs: string;


  constructor(
    private stafserve: StaffurlService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
 this.staffForm = this.fb.group({
      staff_name: ["", Validators.required],
      reg_num: ["", [Validators.required]],
      gendar: ["", [Validators.required]],
      age: ["", Validators.required],
      dob: ["", [Validators.required]],
      designation: ["", Validators.required],
      father_name: ["", Validators.required],
      mothers_name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      qualification: ["", Validators.required],
      doj: ["", Validators.required],
      subject: ["", Validators.required],
      yoe: ["", Validators.required],
      staff_photo: [null],
      fileSource: ["", Validators.required],
      staffies: this.fb.array([]),
    });

    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   }
    else{
      this.isDean = false;
    }
  this.getStudentDetails();
  }

  getStudentDetails(){
    this.stafserve.getStaffDetails().subscribe((res: any) =>{
          console.log(res);
          this.staffs = res;
          this.staffss =res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
          this.dob = this.staffss[0]["dob"];
          this.doj = this.staffss[0]["doj"];
          
        });
        console.log('reeeeeeeeeee',this.staffs);
        
      }

      uploadFile(event) {
    

        const reader = new FileReader();
        
        this.selectedFile = <File>event.target.files[0];
         
          console.log(this.selectedFile);
      }


      Updatestaff(Id: any){

        var value = this.staffForm.value
        var formData: any = new FormData();
        formData.append('staff_name', value.staff_name);
        formData.append('reg_num', value.reg_num);
        // formData.append('startedYear', value.startedYear);
        formData.append('gendar', value.gendar);
        formData.append('age', value.age);
        formData.append('dob', value.dob);
        formData.append('designation', value.designation);
        formData.append('father_name', value.father_name);
        formData.append('mothers_name', value.mothers_name);
        formData.append('phone', value.phone);
        formData.append('email', value.email);
        formData.append('qualification', value.qualification);
        formData.append('doj', value.doj);
        formData.append('subject', value.subject);
        formData.append('yoe', value.yoe);
       if(this.selectedFile != undefined){
              formData.append('staff_photo', this.selectedFile, this.selectedFile.name);
            }
            
            console.log(formData);
    
        
    this.stafserve.Updatestaff(formData, Id).subscribe((res:any)=>  {
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




  openstaff(staffinfomodal, staff) {
    console.log("id iss:", staff);
    this.staff = staff;
    this.dobs = new Date(this.dob).toISOString().slice(0, -1)
    this.dojs = new Date(this.doj).toISOString().slice(0, -1)
    staff.doj =this.dojs;
    staff.dob =this.dobs;
    this.modalService
      .open(staffinfomodal, { ariaLabelledBy: "modal-basic-title" })
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
  download() {
    let fileName = "StaffList.csv";
    let columnNames = [
      "Regno.",
      "Staff Name",
      "Gendar",
      "Age",
      "DOB",
      "Designation",
      "Father Name",
      "Mother Name",
      "phone",
      "Email",
      "Qualification",
      "Date of Joining",
      "Subject",
      "year of Experience",
      "staff Photo link"
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    
    console.log("student list:", this.staffs);
    for (let i = 0; i < this.staffs.length; ++i) {
      this.regnos = this.staffs[i].reg_num;
      this.stfname = this.staffs[i].staff_name;
      this.subj = this.staffs[i].gendar;
      this.phne = this.staffs[i].age;
      this.mail = this.staffs[i].dob;
      this.qualgctin=this.staffs[i].designation;
      this.fathrnm = this.staffs[i].father_name;
      this.mothrnm = this.staffs[i].mothers_name;
      this.phn = this.staffs[i].phone;
      this.eml = this.staffs[i].email;
      this.qlfcn= this.staffs[i].qualification;
      this.dj = this.staffs[i].doj;
      this.sbj = this.staffs[i].subject;
      this.ye = this.staffs[i].yoe;
      this.stfp = this.staffs[i].staff_photo;
     
      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.regnos],
        [this.stfname],
        [this.subj],
        [this.phne],
        [this.mail],
        [this.qualgctin],
        [this.fathrnm],
         [this.mothrnm],
         [this.phn],
         [this.eml],
         [this.qlfcn],
         [this.dj],
         [this.sbj],
         [this.ye],
         [this.stfp]

      // console
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

  valueSelected(staffnames:String){
    this.staffsofclass = this.staffss
    console.log('studentdata',this.staffs);
  
    var filteredStaff = this.staffsofclass.filter(
      item => item.staff_name == staffnames 
    );

    this.staffs = filteredStaff;
    console.log('result',this.staffs)
 }



 simpleAlert(){
  Swal.fire('Hi! Staff updated sucessfully');
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
    // footer: '<a href>Why do I have this issue?</a>'  
  })  
} 



deleteRow(Id): void{
  this.stafserve.deleteStaff(Id)//method name in your services.ts file
  .subscribe(data =>{
    this.staffs =data;
  });
  for(let i = 0; i < this.staffs.length; ++i){
    if (this.staffs[i].id === Id) {
        this.staffs.splice(i,1);
    }
}

}


}
