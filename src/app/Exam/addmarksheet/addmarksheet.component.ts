import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { ExamurlService } from '../examurl.service';

// declare global {
//   interface Navigator {
//       msSaveBlob?: (blob: any, defaultName?: string) => boolean
//   }
// }


@Component({
  selector: 'app-addmarksheet',
  templateUrl: './addmarksheet.component.html',
  styleUrls: ['./addmarksheet.component.css']
})
export class AddmarksheetComponent implements OnInit {
  addmarksheetForm: UntypedFormGroup;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;

  public bookies : any[]=[];

  constructor(private fb:UntypedFormBuilder, private markserve : ExamurlService) { }

  ngOnInit(): void {
    this.addmarksheetForm = this.fb.group({
       
      student_name:['',Validators.required],
      class_name: ['',[Validators.required]],
      Roll_no: ['',[Validators.required]],
      maths_max_marks: ['',Validators.required],
      maths_obt_mark: ['',[Validators.required]],
      maths_min_mark: ['',Validators.required],
      maths_tot_mark: ['',Validators.required],
      maths_percentg: ['',Validators.required],
      english_max_marks: ['',Validators.required],
      english_obt_mark:['',Validators.required],
      english_min_mark:['',Validators.required],
      english_tot_mark:['',Validators.required],
      english_percentg:['',Validators.required],
      science_max_mark:['',Validators.required],
      science_obt_mark:['',Validators.required],
      science_min_mark:['',Validators.required],
      science_tot_mark:['',Validators.required],
      science_percentg:['',Validators.required],
      hindi_max_mark:['',Validators.required],
      hindi_obt_mark:['',Validators.required],
      hindi_min_mark:['',Validators.required],
      hindi_tot_mark:['',Validators.required],
      hindi_percentg:['',Validators.required],
      social_max_mark:['',Validators.required],
      social_obt_mark:['',Validators.required],
      social_min_mark:['',Validators.required],
      social_tot_mark:['',Validators.required],
      social_percentg:['',Validators.required],
      kannada_max_mark:['',Validators.required],
      kannada_obt_mark:['',Validators.required],
      kannada_min_mark:['',Validators.required],
      kannada_tot_mark:['',Validators.required],
      kannada_percentg:['',Validators.required],
      computer_max_mark:['',Validators.required],
      computer_obt_mark:['',Validators.required],
      computer_min_mark:['',Validators.required],
      computer_tot_mark:['',Validators.required],
      computer_percentg:['',Validators.required],

      // bookies: this.fb.array([]) ,
    });
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
   if( localStorage.getItem('group') == 'staff') {
  
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


  newQuantity(): UntypedFormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.bookies.push({
      id: this.bookies.length + 1,
      name: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      value5:'',
    });
  }


   
  removeQuantity(i:number) {
    this.bookies.splice(i, 1);
  }
   
  onSubmit(){
    var value = this.addmarksheetForm.value
  

  var formData: any = new FormData();
      formData.append('student_name', value.student_name);
      formData.append('class_name', value.class_name);
      // formData.append('startedYear', value.startedYear);
      formData.append('Roll_no', value.Roll_no);
      formData.append('maths_max_marks', value.maths_max_marks);
      formData.append('maths_obt_mark', value.maths_obt_mark);
      formData.append('maths_min_mark', value.maths_min_mark);
      formData.append('maths_tot_mark', value.maths_tot_mark);
      formData.append('maths_percentg', value.maths_percentg);
      formData.append('english_max_marks', value.english_max_marks);
      formData.append('english_obt_mark', value.english_obt_mark);
      formData.append('english_min_mark', value.english_min_mark);
      formData.append('english_tot_mark', value.english_tot_mark);
      formData.append('english_percentg', value.english_percentg);
      formData.append('science_max_mark', value.science_max_mark);
      formData.append('science_obt_mark', value.science_obt_mark);
      formData.append('science_min_mark', value.science_min_mark);
      formData.append('science_tot_mark', value.science_tot_mark);
      formData.append('science_percentg', value.science_percentg);
      formData.append('hindi_max_mark', value.hindi_max_mark);
      formData.append('hindi_obt_mark', value.hindi_obt_mark);
      formData.append('hindi_min_mark', value.hindi_min_mark);
      formData.append('hindi_tot_mark', value.hindi_tot_mark);
      formData.append('hindi_percentg', value.hindi_percentg);
      formData.append('social_max_mark', value.social_max_mark);
      formData.append('social_obt_mark', value.social_obt_mark);
      formData.append('social_min_mark', value.social_min_mark);
      formData.append('social_tot_mark', value.social_tot_mark);
      formData.append('social_percentg', value.social_percentg);
      formData.append('kannada_max_mark', value.kannada_max_mark);
      formData.append('kannada_obt_mark', value.kannada_obt_mark);
      formData.append('kannada_min_mark', value.kannada_min_mark);
      formData.append('kannada_tot_mark', value.kannada_tot_mark);
      formData.append('kannada_percentg', value.kannada_percentg);
      formData.append('computer_max_mark', value.computer_max_mark);
      formData.append('computer_obt_mark', value.computer_obt_mark);
      formData.append('computer_min_mark', value.computer_min_mark);
      formData.append('computer_tot_mark', value.computer_tot_mark);
      formData.append('computer_percentg', value.computer_percentg);
      // formData.append('yoe', value.yoe);
      
      
      console.log(formData);

    
    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */
    
    this.markserve.Regmark(formData).subscribe((res:any)=>  {
      console.log(res)

      if(this.bookies.length > 0){
        for(let i=0; i<this.bookies.length; i++){    
          const extraData = {
            marksheet: res.id,
            name: this.bookies[i].name,
            value1: this.bookies[i].value1,
            value2: this.bookies[i].value2,
            value3: this.bookies[i].value3,
            value4: this.bookies[i].value4,
            value5:this.bookies[i].value5,
          };
          console.log('extraadataaa',extraData)

          this.markserve.Regaddmoremark(extraData).subscribe((res:any)=>  {
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
      console.log(error);
      // this.success = false;
      // this.errMsg = true;
      // this.showForm = false;
      // this.showContact = false;
     
      
    });
    
}

simpleAlert(){
  Swal.fire('Hi! Marksheet Updated successfully');
}

successAlertNotification(){
  Swal.fire('Hi', 'Marksheet Added successfully', 'success')
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

  
