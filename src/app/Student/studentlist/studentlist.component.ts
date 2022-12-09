import { StudenturlService } from '../../shared/services/studenturl.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import {Studentdata} from '../studentdata';
import { isNgTemplate } from '@angular/compiler';
import { FeeurlService } from 'src/app/shared/services/feeurl.service';
import { ClassurlService } from 'src/app/shared/services/classurl.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CategoryService } from 'src/app/shared/services/category.service';
import { DatePipe } from '@angular/common';





@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  
  closeResult: string;
  regnos: string;
  studname: string;
  cls: string;
  sectn: string;
  fathname: string;
  contno: string;
  admissiondate: string;
  adrs: string;
  term:any;
  studentdetail: Studentdata[];
  studentt: any;
  totalRec : number;
  page: number = 1;
  loading = false;
 
  studentregForm: FormGroup;



  popoverTitle = 'Delete Student';
  popoverMessage = 'Are you sure want to delete Permanently?';
  confirmClicked = false;
  cancelClicked = false;

 
  anydt: any;
  dofad: any;
  admf: any;
  tunf: any;
  trnf: any;
  foodf: any;
  hosf: any;
  miscf: any;
  stdntadrs: any;
  cty: any;
  ste: any;
  contry: any;
  pncd: any;
  acdmy: any;
  emds: any;
  stdp: any;
  selectedclass: any;
 
  selectedsection: any;
  class_name: string;
  section: string;
  
  selectedFile: any;
  studentId: any;
  catgory: { category: string; percentage: number; }[];
  feedata: { _id: number; academic_year: string; admission_fee: string; class_name: string; computer_fee: string; exam_fee: string; food_fee: string; hostel_fee: string; misc_fee: string; transport_fee: string; tuition_fee: string; total_fee: any; }[];
  totalFee: number;
  classTotalFee: number;
  selectedcat: any;
  perctg: number;
 
  classmemo: { id: string; Maths: boolean; class_name: string; computer: boolean; english: boolean; hindi: boolean; kannada: boolean; pt: boolean; science: boolean; section: string; social_science: boolean; teachers: string; }[];
  students: any;
  
  studentss: any;
  catdata: { Dob: string; academic_year: string; admission_fee: boolean; alter_num: string; anniversary_date: string; city: string; class_name: string; contact_num: string; country: string; date_of_admission: string; email_address: string; father_dob: string; father_name: string; fileSource: string; food_fee: boolean; gender: string; hostel_fee: boolean; misc_fee: string; mother_dob: string; mother_name: string; pincode: string; reg_number: string; section: string; state: string; student_address: string; student_name: string; student_photo: string; transport_fee: boolean; tuition_fee: boolean; total_fee: number; paid_fee: number; category: string; }[];
  studentsofclass: any;
  Dob: string;
  contn: any;
  altr: any;
  fathdob: any;
  mothdob: any;
  totfee: any;
  cat: any;
  paidf: any;
  dued: any;
  feedatas: any;
  transport_fee: any;
  food_fee: any;
  hostel_fee: any;
  dob: any;
  dobs: any;
  currentDate: any;
  studentt_Dob: any;
  fathers_dob: any;
  mothers_dob: any;
  annivsry: any;
  duedate: any;
  fatherss_dob: string;
  motherss_dob: string;
  annivsryy: string;
  duedatee: string;
  dateofadmission: any;
  dateofadmissionn: string;
  isDean: boolean;
  isStaff: boolean;
  extrastud: any;

  constructor(  private clshh:ClassurlService,private fb:FormBuilder,private studserve :StudenturlService,private modalService: NgbModal, private feee: FeeurlService, private http: HttpClient,
    private catry :CategoryService,
    public datepipe: DatePipe) {

   
   }

  ngOnInit(): void {
   this.currentDate = '2022-03-06T16:45:00Z';
  
    this.studentregForm= this.fb.group({
      reg_number : ['',Validators.required],
      student_name:['',Validators.required],
      class_name : ['',Validators.required],
      section :['',Validators.required],
      Dob :['',Validators.required],
      gender : ['',Validators.required],
      father_name: ['',Validators.required],
      mother_name:['',Validators.required],
      contact_num: ['',Validators.required],
      alter_num : ['',Validators.required],
      father_dob:['',Validators.required],
      mother_dob: ['',Validators.required],
      anniversary_date:['',Validators.required],
      date_of_admission: ['',Validators.required],
      admission_fee: ['',Validators.required],
      tuition_fee: ['',Validators.required],
      transport_fee: ['',Validators.required],
      food_fee: ['',Validators.required],
      hostel_fee:['',Validators.required],
      misc_fee: ['',Validators.required],
      total_fee:['',Validators.required],
      category:['',Validators.required],
      paid_fee:['',Validators.required],
      Due_date :[''],
      student_address:['',Validators.required],
      city:['',Validators.required],
      state: ['',Validators.required],
      country: ['',Validators.required],
      pincode: ['',Validators.required],
      academic_year: ['',Validators.required],
      email_address: ['',Validators.required],
      student_photo: [null],
    fileSource:['',Validators.required],
    studenties: this.fb.array([]) ,
    });

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

    this.getStudentDetails();
    this.getclassDetails();
    this.getcatDetails();
    this.getfeeDetails();
    this.getStudentDetails();
    this.getaddmorestudentDetails();
    

  }
  uploadFile(event) {
    

    const reader = new FileReader();
    
    this.selectedFile = <File>event.target.files[0];
      // debugger
      console.log(this.selectedFile);
  }
  
  // Savestudent(value) {  
  //   this.stude.Savestudent(value);  
  //   this.router.navigate(['student/studentdetails']);
  // } 
  
  

  
  
      getclassDetails(){
        this.clshh.getClassDetails().subscribe((res: any) =>{
              console.log(res);
              this.classmemo = res;
              
            });
            console.log('class',this.classmemo);
            
          }

          getaddmorestudentDetails(){
            this.studserve.getaddmoreStudentDetails().subscribe((res: any) =>{
                  console.log(res);
                  this.extrastud = res;
                  console.log('extraaaa',this.extrastud);
                  });
               
             }
  
  
          getcatDetails(){
            this.catry.getfeeDetails().subscribe((res: any) =>{
                  console.log(res);
                  this.catgory = res;
                  
                });
                console.log('reeeeeeeeeee',this.catgory);
                
              }
  
  
  
              getfeeDetails(){
                this.feee.getfeeDetails().subscribe((res: any) =>{
                      console.log(res);
                      this.feedatas = res;
                      
                    });
                    console.log('reeeeeeeeeee',this.feedatas);
                    
                  }

 public getStudentDetails(){
  this.studserve.getStudentDetails().subscribe((res: any) =>{
      console.log(res);
      this.students = res;
      this.studentss = res;
      
      this.studentId = this.students[0]["id"];
      this.dob = this.studentss[0]["Dob"];
      this.fathers_dob = this.studentss[0]["father_dob"];
      this.mothers_dob =  this.studentss[0]["mother_dob"];
      this.annivsry = this.studentss[0]["anniversary_date"];
      this.dateofadmission = this.studentss[0]["date_of_admission"];
       this.duedate = this.studentss[0]['Due_date'];
     
      console.log('reeeeeeeeeee',this.dob);
      
      
    });
   
    
  }

  
  Updatestudent(Id: any){

    var value = this.studentregForm.value
    var formData: any = new FormData();
        formData.append('reg_number', value.reg_number);
        formData.append('student_name', value.student_name);
        // formData.append('startedYear', value.startedYear);
        formData.append('class_name', value.class_name);
        formData.append('section', value.section);
        formData.append('Dob', value.Dob);
        formData.append('gender', value.gender);
        formData.append('father_name', value.father_name);
        formData.append('mother_name', value.mother_name);
        formData.append('contact_num', value.contact_num);
        formData.append('alter_num', value.alter_num);
        formData.append('father_dob', value.father_dob);
        formData.append('mother_dob', value.mother_dob);
        formData.append('anniversary_date', value.anniversary_date);
        formData.append('date_of_admission', value.date_of_admission);
        console.log('admission fee', value.admission_fee)
        formData.append('admission_fee', value.admission_fee);
        formData.append('tuition_fee', value.tuition_fee);
        formData.append('transport_fee', value.transport_fee);
        formData.append('food_fee', value.food_fee);
        formData.append('hostel_fee', value.hostel_fee);
        formData.append('misc_fee', value.misc_fee);
        formData.append('total_fee', value.total_fee);
        formData.append('category', value.category);
        formData.append('paid_fee', value.paid_fee);
        formData.append('Due_date', value.Due_date);
        formData.append('student_address', value.student_address);
        formData.append('city', value.city);
        formData.append('state', value.state);
        formData.append('country', value.country);
        formData.append('pincode', value.pincode);
        formData.append('academic_year', value.academic_year);
        formData.append('email_address', value.email_address);
        if(this.selectedFile != undefined){
        formData.append('student_photo', this.selectedFile, this.selectedFile.name);
        }
        
        console.log(formData);

    
this.studserve.Updatestudent(formData, Id).subscribe((res:any)=>  {
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


  
  openStudent(studentmodal , studentt) {
    console.log("id iss:", studentt);
    this.studentt = studentt;
    console.log('ffffffffffffffff',this.dob)
    this.dobs = new Date(this.dob).toISOString().slice(0, -1)
    this.fatherss_dob = new Date(this.fathers_dob).toISOString().slice(0, -1)
    this.motherss_dob = new Date(this.mothers_dob).toISOString().slice(0, -1)
    this.annivsryy = new Date(this.annivsry).toISOString().slice(0, -1)
    this.dateofadmissionn = new Date(this.dateofadmission).toISOString().slice(0, -1)
    this.duedatee = new Date(this.duedate).toISOString().slice(0, -1)
    console.log('bfvhnmgvjmnh',this.dobs)
    studentt.Dob = this.dobs;
    studentt.father_dob = this.fatherss_dob ;
    studentt.mother_dob = this.motherss_dob;
    studentt.anniversary_date = this.annivsryy;
    studentt.date_of_admission = this.dateofadmissionn;
    studentt.Due_date =this.duedatee;

   
    this.modalService
      .open(studentmodal, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          
          // this.feeDetail = {id:fee._id, class_name: fee.class_name, academic_year:fee.academic_year, tuition_fee:fee.tuition_fee};
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
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
    let fileName = 'StudentList.csv';
    let columnNames = ["Regno.","Student Name","Class","Section","Date of Birth","gendar","Fathers Name","Mother Name","Contact Number","Alternate Number","Father Dob","Mother Dob","Anniversary Date","Date Of Admission","Admission Fee","Tuition Fee","Transport Fee","Food Fee", "Hostel Fee", "Misc Fee","Total Fee", "Category", "Paid Fee", "Due Date", "Student address","City","State","Country","Pincode","Academic Year","Email Address","Student Photo"];
    let header = columnNames.join(',');

    let csv = header;
    csv += '\r\n';

    console.log('student list:',this.students)
      for(let i=0 ;i < this.students.length; ++i){
  this.regnos=this.students[i].reg_number;
  this.studname=this.students[i].student_name;
  this.cls=this.students[i].class_name;
  this.sectn=this.students[i].section;
  this.fathname=this.students[i].Dob;
  this.contno=this.students[i].gender;
  this.admissiondate=this.students[i].father_name;
  this.adrs=this.students[i].mother_name;
  this.contn=this.students[i].contact_num;
  this.altr=this.students[i].alter_num;
  this.fathdob=this.students[i].father_dob;
  this.mothdob=this.students[i].mother_dob;
  this.anydt=this.students[i].anniversary_date;
  this.dofad=this.students[i].date_of_admission;
  this.admf=this.students[i].admission_fee;
  this.tunf=this.students[i].tuition_fee;
  this.trnf=this.students[i].transport_fee;
  this.foodf=this.students[i].food_fee;
  this.hosf=this.students[i].hostel_fee;
  this.miscf=this.students[i].misc_fee;
  this.totfee=this.students[i].total_fee;
  this.cat=this.students[i].category;
  this.paidf=this.students[i].paid_fee;
  this.dued=this.students[i].Due_date;
  this.stdntadrs=this.students[i].student_address;
  this.cty=this.students[i].city;
  this.ste=this.students[i].state;
  this.contry=this.students[i].country;
  this.pncd=this.students[i].pincode;
  this.acdmy=this.students[i].academic_year;
  this.emds=this.students[i].email_address;
  this.stdp=this.students[i].student_photo;
 

    // console.log("Finalnumber",this.usernumber);
    csv += [[this.regnos] ,[this.studname],[this.cls],[this.sectn],[this.fathname] ,[this.contno] ,[this.admissiondate] ,[this.adrs],[this.contn],
    [this.altr],
    [this.fathdob],
    [this.mothdob],
    [this.anydt],
    [this.dofad],
    [this.admf],
    [this.tunf],
    [this.trnf],
    [this.foodf],
    [this.hosf],
    [this.miscf],
    [this.totfee],
    [this.cat],
    [this.paidf],
    [this.dued],
    [this.stdntadrs],
    [this.cty],
    [this.ste],
    [this.contry],
    [this.pncd],
    [this.acdmy],
    [this.emds],
    [this.stdp] ].join(',');
    csv += '\r\n';
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

valueSelected() {
  // alert(this.selectedclass);
  var feeList = this.feedatas;
 
  console.log(feeList);
  console.log(this.selectedclass);
  console.log(typeof(this.selectedclass));
  
  this.feedata=this.feedatas.filter(
    item => item.class_name == String(this.selectedclass)
  );

  this.totalFee = Number(this.feedata[0]?.admission_fee) + Number(this.feedata[0]?.tuition_fee) + Number(this.feedata[0]?.transport_fee) + Number(this.feedata[0]?.food_fee) + Number(this.feedata[0]?.hostel_fee) + Number(this.feedata[0]?.misc_fee)

  console.log('total fee type', typeof(this.totalFee));
  
  console.log('feee',this.feedata);
}


cost(amt, checked){
this.transport_fee = checked
this.food_fee= this.food_fee
this.hostel_fee =this.hostel_fee


// this.totalFee = Number(this.feedata[0]?.admission_fee) + Number(this.feedata[0]?.tuition_fee) + Number(this.feedata[0]?.transport_fee) + Number(this.feedata[0]?.food_fee) + Number(this.feedata[0]?.hostel_fee) + Number(this.feedata[0]?.misc_fee)
console.log('amount',amt);

console.log('total fee type', typeof(this.totalFee));
if(checked){
  this.totalFee = this.totalFee + amt;
 
} else  {
  
  this.totalFee = this.totalFee - amt;
}
this.classTotalFee = this.totalFee;
console.log('total fee type', typeof(this.totalFee));
console.log('Class Total fee type', typeof(this.classTotalFee));


console.log('tttttttttttttttttttttt',this.totalFee);

}

// costfood(amt, checked){

//   this.food_fee =checked

//   // this.totalFee = Number(this.feedata[0]?.admission_fee) + Number(this.feedata[0]?.tuition_fee) + Number(this.feedata[0]?.transport_fee) + Number(this.feedata[0]?.food_fee) + Number(this.feedata[0]?.hostel_fee) + Number(this.feedata[0]?.misc_fee)
//   console.log('amount',amt);

//   console.log('total fee type', typeof(this.totalFee));
//   if(checked){
//     this.totalFee = this.totalFee + amt;
 
//   } else  {
  
//     this.totalFee = this.totalFee - amt;
//   }
//   this.classTotalFee = this.totalFee;
//   console.log('total fee type', typeof(this.totalFee));
//   console.log('Class Total fee type', typeof(this.classTotalFee));


//   console.log('tttttttttttttttttttttt',this.totalFee);

// }


// costhostel(amt, checked){


//   this.hostel_fee =checked

//   // this.totalFee = Number(this.feedata[0]?.admission_fee) + Number(this.feedata[0]?.tuition_fee) + Number(this.feedata[0]?.transport_fee) + Number(this.feedata[0]?.food_fee) + Number(this.feedata[0]?.hostel_fee) + Number(this.feedata[0]?.misc_fee)
//   console.log('amount',amt);

//   console.log('total fee type', typeof(this.totalFee));
//   if(checked){
//     this.totalFee = this.totalFee + amt;
 
//   } else  {
  
//     this.totalFee = this.totalFee - amt;
//   }
//   this.classTotalFee = this.totalFee;
//   console.log('total fee type', typeof(this.totalFee));
//   console.log('Class Total fee type', typeof(this.classTotalFee));


//   console.log('tttttttttttttttttttttt',this.totalFee);

// }




  // to filter option
  valueSelectedd(selectedclasss:String , selectedsectionn:String){
    this.studentsofclass = this.studentss;
    console.log('studentdata',this.studentsofclass);
  
    var filteredStudent = this.studentsofclass.filter(
      item => item.class_name == selectedclasss && item.section == selectedsectionn
    );
    
    this.students = filteredStudent;
     
    console.log('all', this.studentsofclass)
    console.log('result', this.students)
 }




// Savestudent(value) {  
//   this.stude.Savestudent(value);  
//   this.router.navigate(['student/studentdetails']);
// } 


//to select the class for displaying fees of particular class



//to check ot uncheck fees to deduct



//to selected category total fee will we deducted

  categorySelected(event){
    this.selectedcat=event;
    var filteredCategory =this.catgory.filter(element => element.category == this.selectedcat);
    this.perctg = filteredCategory[0].percentage; 
    console.log('percentage',Number(this.perctg));
    var catlist= this.students;
    console.log(catlist);
    this.catdata=this.students.filter(
       cat=>cat.category == this.selectedcat
    );
    console.log('total fee type', typeof(this.totalFee));
    
    this.classTotalFee = Number(this.feedata[0]?.admission_fee) + Number(this.feedata[0]?.tuition_fee) + Number(this.feedata[0]?.transport_fee) + Number(this.feedata[0]?.food_fee) + Number(this.feedata[0]?.hostel_fee) + Number(this.feedata[0]?.misc_fee)
    if(this.selectedcat =='SC'){
      console.log('percentage type:', typeof(this.perctg));
      this.totalFee = this.classTotalFee - (this.perctg);
      console.log('catdata',this.totalFee);
      
    } else if(this.selectedcat =='2A'){
      this.totalFee = this.classTotalFee - (this.perctg);
    }
    else if(this.selectedcat =='C-1'){
      this.totalFee = this.classTotalFee - (this.perctg);
    }
    else if(this.selectedcat =='ST'){
      this.totalFee = this.classTotalFee - (this.perctg);
    }
    else{
      this.totalFee;
    }
    console.log('percentage type:', typeof(this.perctg));
    console.log('total fee type', typeof(this.totalFee));


  }


  simpleAlert(){
    Swal.fire('Hi !Student updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Student Registered successfully', 'success')
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
    this.studserve.deleteStudent(Id)//method name in your services.ts file
    .subscribe(data =>{
      this.students =data;
    });
    for(let i = 0; i < this.students.length; ++i){
      if (this.students[i].id === Id) {
          this.students.splice(i,1);
      }
  }

}




}
