import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
// import * as XLSX from 'xlsx';
import {StudenturlService} from '../../shared/services/studenturl.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ClassurlService } from 'src/app/shared/services/classurl.service';
import { FeeurlService } from 'src/app/shared/services/feeurl.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CategoryService } from 'src/app/shared/services/category.service';
import * as _ from 'lodash';




@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {


  @ViewChild('UploadFileInput', { static: false }) uploadFileInput: ElementRef;
  
  fileInputLabel: string;


   data :any;
   studentregForm: FormGroup;
  imageSrc: string;
  classmemo: any[] = [];
  exceldata: any;
  excelArrayData: any;
  selectedclass: any;
  totalFee: any = null;
  studentdata: { Dob: string; academic_year: string; admission_fee: boolean; alter_num: string; anniversary_date: string; city: string; class_name: string; contact_num: string; country: string; date_of_admission: string; email_address: string; father_dob: string; father_name: string; fileSource: string; food_fee: boolean; gender: string; hostel_fee: boolean; misc_fee: string; mother_dob: string; mother_name: string; pincode: string; reg_number: string; section: string; state: string; student_address: string; student_name: string; student_photo: string; transport_fee: boolean; tuition_fee: boolean; total_fee: number; paid_fee: number; category: string; }[];
  catdata: { Dob: string; academic_year: string; admission_fee: boolean; alter_num: string; anniversary_date: string; city: string; class_name: string; contact_num: string; country: string; date_of_admission: string; email_address: string; father_dob: string; father_name: string; fileSource: string; food_fee: boolean; gender: string; hostel_fee: boolean; misc_fee: string; mother_dob: string; mother_name: string; pincode: string; reg_number: string; section: string; state: string; student_address: string; student_name: string; student_photo: string; transport_fee: boolean; tuition_fee: boolean; total_fee: number; paid_fee: number; category: string; }[];
  selectedcat: string;
  perctg: any;
  checkbox150:any;
  checkbox160:any;
  totalFee1: number;
  classTotalFee: any;
  success: boolean;
  errMsg: boolean;
  showForm: boolean;
  showContact: boolean;
  saveForm: boolean;
  updateForm: boolean;
  selectedFile: File;
  isDisabled : boolean;
  studentexpo: any;
  students: any;
  studentss: any;
  studentId: any;
  feedatas: any;
  catgory: any;
  checked: any;
 public error: any; 
  annierror: any;
  fathname: any;
  feedata: any[];
 transport_fee = true;
  food_fee = true;
  hostel_fee =true;
  classTotalFees: any;
  classTotalFee1: any;
  classTotalFee2: any;
  classTotalFee3: any;
  isDean: boolean;
  isStaff: boolean;
  csvuploadForm: FormGroup;
  studentID: any;
  public studenties: any[] = [];
 



  
  constructor(private fb:FormBuilder , private stude :StudenturlService,private router: Router,
    private clshh:ClassurlService,
    private feee:FeeurlService,
    private http: HttpClient,
    private catry :CategoryService,
    public datepipe: DatePipe
    ) {
   
    
    
    this.feedata=[];
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

//  fileSource:['',Validators.required],
//  studenties: this.fb.array([]) ,

 
     
});

this.csvuploadForm= this.fb.group({
  myfile: ['']
})

   }

  ngOnInit(): void {
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
    this.stude.getStudent().subscribe();
  }


  // get contact_num() {
  //   return this.studentregForm.get('contact_num');
  // } 
 
  // get alter_num() {
  //   return this.studentregForm.get('alter_num');
  // } 
 

  // for excel file

  onFileSelect(event) {
    let af = ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.ms-excel']
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);

      if (!_.includes(af, file.type)) {
        alert('Only EXCEL Docs Allowed!');
      } else {
        this.fileInputLabel = file.name;
        this.csvuploadForm.get('myfile').setValue(file);
      }
    }
  }


 newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.studenties.push({
      id: this.studenties.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.studenties.splice(i, 1);
  }
   

  // onFileChange(evt :any){
  //  const target : DataTransfer = <DataTransfer>(evt.target);
     
  //  if(target.files.length !==1) throw new Error('Cannot Use Multiple Files');

  //  const reader :FileReader = new FileReader();

  //  reader.onload = (e :any) =>{
  //    const bstr :string = e.target.result;

  //    const wb : XLSX.WorkBook = XLSX.read(bstr ,{type :'binary'} );
   
  //    const wsname :string = wb.SheetNames[0];

  //    const ws :XLSX.WorkSheet = wb.Sheets[wsname];

  //    console.log('Excel Datas:', ws);

  //    this.data = (XLSX.utils.sheet_to_json(ws ,{header: 1}));
  //   //  console.log('Data :' ,  this.data);
     
  //    };

  //   reader.readAsBinaryString(target.files[0]);

  // }
  get f(){
    return this.studentregForm.controls;
  }


  get reg_number(){
    return this.studentregForm.get('reg_number') as FormControl
  }





// Savestudentexcel() {  
//   let exceldata = [];
//   for (let i = 1; i < this.data.length; i++) {
//     console.log(this.data[i][0]);
//     var rowData:any = {
//       'Dob': this.data[i][0],
//       'academic_year': this.data[i][1],
//       'admission_fee': this.data[i][2],
//       'alter_num': this.data[i][3],
//       'anniversary_date': this.data[i][4],
//       'city': this.data[i][5],
//       'class_name': this.data[i][6],
//       'contact_num': this.data[i][7],
//       'country': this.data[i][8],
//       'date_of_admission': this.data[i][9],
//       'email_address': this.data[i][10],
//       'father_dob': this.data[i][11],
//       'father_name': this.data[i][12],
//       'food_fee': this.data[i][13],
//       'gender': this.data[i][14],
//       'hostel_fee': this.data[i][15],
//       'misc_fee': this.data[i][16],
//       'mother_dob': this.data[i][17],
//       'mother_name': this.data[i][18],
//       'pincode': this.data[i][19],
//       'reg_number': this.data[i][20],
//       'section': this.data[i][21],
//       'state': this.data[i][22],
//       'student_address': this.data[i][23],
//       'student_name': this.data[i][24],
//       'transport_fee': this.data[i][25],
//        'tuition_fee': this.data[i][26],
//        'total_fee' :this.data[i][27],
//        'paid_fee':this.data[i][28],
//        'category':this.data[i][29],
//        'student_photo': this.data[i][30]
//     }
    // rowData.append('student_photo', this.data[i][25], this.data[i][24]);
    // exceldata.push(rowData)
  
    // push this data to service 
    
    // this.exceldata=JSON.parse(this.data[i]);
    // this.stude.Savestudentexcel(exceldata);  
  // }
//   console.log(exceldata)
    
    
// this.stude.Exportstudent(exceldata).subscribe((res:any)=>  {
//   console.log(res);
// })


    // console.log("inserted data", res);
//   this.router.navigate(['student/studentdetails']);
// } 

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


public getStudentDetails(){
  this.stude.getStudentDetails().subscribe((res: any) =>{
        console.log(res);
        this.students = res;
        this.studentId = this.students[0]["id"];
      });
      console.log('reeeeeeeeeee',this.students);
      
    }

getclassDetails(){
      this.clshh.getClassDetails().subscribe((res: any) =>{
            console.log(res);
            this.classmemo = res;
            
          });
          console.log('class',this.classmemo);
          
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
    this.classTotalFee = this.totalFee;

}


cost(amt, checked){
  // this.transport_fee = checked
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




  categorySelected(event){
    this.selectedcat=event;
    var filteredCategory =this.catgory.filter(element => element.category == this.selectedcat);
    this.perctg = filteredCategory[0].Percentage; 
    console.log('percentage',Number(this.perctg));
    var catlist= this.students;
    console.log(catlist);
    this.catdata=this.students.filter(
       cat=>cat.category == this.selectedcat
    );
    console.log('total fee type', typeof(this.totalFee));
    
       this.classTotalFee = this.totalFee;
   
    if(this.selectedcat =='SC'){
      console.log('percentage type:', typeof(this.perctg));
      this.classTotalFee = this.totalFee - (this.perctg);
      console.log('catdata',this.totalFee);
      
    } else if(this.selectedcat =='2A'){
      this.classTotalFee = this.totalFee - (this.perctg);
    }
    else if(this.selectedcat =='C-1'){
      this.classTotalFee = this.totalFee - (this.perctg);
    }
    else if(this.selectedcat =='ST'){
      this.classTotalFee = this.totalFee - (this.perctg);
    }
    else{
      this.classTotalFee = this.totalFee - 0;
    }
    console.log('percentage type:', typeof(this.perctg));
    console.log('total fee type', typeof(this.totalFee));


  }

   // for exel file
  submitFormm(){
  // if (!this.studentregForm.get('myfile').value) {
  //   alert('Please fill valid details!');
  //   return false;
  // }
   
  // console.log(this.studentregForm.value);
var value = this.csvuploadForm.value
console.log(value);
var formData:any = new FormData();
    
  formData.append('formFile', this.csvuploadForm.get('myfile').value);
  formData.append('agentId', '007');
        
  console.log(formData);
  this.stude.Exportstudent(formData).subscribe((res:any)=>  {
    console.log(res);
  this.successAlertNotification()
},(error:HttpErrorResponse)=>{
  this.erroalert();
  console.log(error)
}); 
}


  submitForm(){


    var value = this.studentregForm.value
    console.log(value);
 
      var formData:any = new FormData();
       if(this.students.filter(({ reg_number }) => reg_number == value.reg_number).length){
        alert("register number already exists!!")
       }
       else{
        formData.append('reg_number', value.reg_number);
        
       }
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
        console.log('admission fee', this.feedata[0]?.admission_fee);
        formData.append('admission_fee', this.feedata[0]['admission_fee']);
        formData.append('tuition_fee', this.feedata[0].tuition_fee);
        console.log('ssssss',this.feedata[0].food_fee);
      
        if(this.transport_fee === true){
          formData.append('transport_fee', this.feedata[0].transport_fee);
        }
        else if(this.transport_fee === false){
          formData.append('transport_fee', 0);
        }

        if(this.food_fee === true){
          formData.append('food_fee', this.feedata[0].food_fee);
        }
        else if(this.food_fee === false){
          formData.append('food_fee', 0);
        }


        if(this.hostel_fee === true){
          formData.append('hostel_fee', this.feedata[0].hostel_fee);
        }
        else if(this.hostel_fee === false){
          formData.append('hostel_fee', 0);
        }

        formData.append('misc_fee', this.feedata[0].misc_fee);
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
        if(this.selectedFile == null){
          alert("Please upload student photo") 
        }
       formData.append('student_photo', this.selectedFile, this.selectedFile.name);
       
        /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      
     
       this.stude.Regstudent(formData).subscribe((res:any)=>  {
        console.log(res);

        
        console.log(this.studenties)
          if(this.studenties.length > 0){
        for(let i=0; i<this.studenties.length; i++){    
          const extraData = {
            student: res.id,
            name: this.studenties[i].name,
            value: this.studenties[i].value,
          };
          console.log('extraadataaa',extraData)

          this.stude.Addmorestudent(extraData).subscribe((res:any)=>  {
            console.log(res)
          
        });
        }
      }
       
        this.successAlertNotification()
        // this.success = true;
        // this.errMsg = false;
        // this.showForm = false;
        // this.showContact = false;
        // this.router.navigate(['student/studentdetails']);
        
      },(error:HttpErrorResponse)=>{
        this.erroalert();
        console.log(error)
         console.log('fffff', this.fathname );
        // this.success = false;
        // this.errMsg = true;
        // this.showForm = false;
        // this.showContact = false;
       
        
      }); 
      this.saveForm=true;
      this.updateForm =false;
    }


      
  simpleAlert(){
    Swal.fire('Hi! Student updated successfully');
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
      text: " Please note:"+ this.error,  
      // footer: '<a href>Why do I have this issue?</a>'  
    })  
  } 
 
  log(value) {
    return ' [' + value + ', ' + typeof value + ']';
  }

}
