import { TimetableurlService } from './../timetableurl.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-addtimetable',
  templateUrl: './addtimetable.component.html',
  styleUrls: ['./addtimetable.component.css']
})
export class AddtimetableComponent implements OnInit {
  timetabForm: FormGroup;
  isDean: boolean;

 public periods: any[]=[];
  constructor(private fb:FormBuilder,private timeserve: TimetableurlService) { 
    this.timetabForm = this.fb.group({
       
      class_name:['',Validators.required],
      section:['',Validators.required],
      timetable_date:['',Validators.required],
      // from_time:['',Validators.required],
      // to_time: ['',[Validators.required]],
      // monday: ['',[Validators.required]],
      // Tuesday: ['',Validators.required],
      // wednesday: ['',[Validators.required]],
      // thursday: ['',Validators.required],
      // friday: ['',Validators.required],
      // saturday: ['',Validators.required],
      // periods: this.fb.array([]) ,
    });

   
  }

  ngOnInit(): void {
    if(localStorage.getItem('group') == 'admin' ) {
      this.isDean = true;
   }
   else{
    this.isDean = false;
  }
  }

  
  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.periods.push({
      id: this.periods.length + 1,
      from_time: '',
      to_time: '',
      monday: '',
      Tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
    });
  }

  removeQuantity(i:number) {
    this.periods.splice(i, 1);
  }
  
  onSubmit(){

  
    const value = this.timetabForm.value;
     const formData: FormData = new FormData();
    console.log(formData)
    formData.append('class_name', value.class_name);
    formData.append('section', value.section);
    formData.append('timetable_date', value.timetable_date);
   
          
    console.log(formData);
    
        
        /* let headers = new HttpHeaders({
          // 'Content-Type': 'multipart/form-data',
          'Authorization': 'Token ' + localStorage.getItem('token')
        }); */
        
        this.timeserve.Regtimetable(formData).subscribe((res:any)=>  {
          console.log(res)


          if(this.periods.length > 0){
            for(let i=0; i<this.periods.length; i++){    
              const extraData = {
                timetab: res.id,
                from_time: this.periods[i].from_time,
                to_time: this.periods[i].to_time,
                monday:  this.periods[i].monday,
                Tuesday:  this.periods[i].Tuesday,
                wednesday:  this.periods[i].wednesday,
                thursday:  this.periods[i].thursday,
                friday:  this.periods[i].friday,
                saturday:  this.periods[i].saturday,
              };
              console.log('extraadataaa',extraData)
    
              this.timeserve.Regaddmoretimetable(extraData).subscribe((res:any)=>  {
                console.log(res)
              
            });
            }
          }
         
          this.successAlertNotification()
     
          
        },(error:HttpErrorResponse)=>{
          this.erroalert();
          console.log(error);
        
         
          
        });
        
      }
      simpleAlert(){
        Swal.fire('Hi! Timetable Updated successfully');
      }
      
      successAlertNotification(){
        Swal.fire('Hi', 'Timetable Registered successfully', 'success')
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
