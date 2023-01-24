import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { VehicleurlService } from '../vehicleurl.service';

@Component({
  selector: 'app-regvehicle',
  templateUrl: './regvehicle.component.html',
  styleUrls: ['./regvehicle.component.css']
})
export class RegvehicleComponent implements OnInit {

  vehicleregForm: UntypedFormGroup;
  imageSrc: string;
  selectedFile: any;

  public vehicleregies: any[]=[];

  constructor(private fb:UntypedFormBuilder, private vehicleserve : VehicleurlService) { 
   
  }

  ngOnInit(): void {

    this.vehicleregForm = this.fb.group({
       
      reg_no:['',Validators.required],
      vehicle_type: ['',[Validators.required]],
      reg_owner: ['',[Validators.required]],
      owner_address: ['',Validators.required],
      month_manufacture: ['',[Validators.required]],
      makers_class: ['',Validators.required],
      seating_capacity: ['',Validators.required],
      vehicle_num:['',Validators.required],
      reg_date:['',Validators.required],
      reg_photo:[null],
      fileSource : ['',Validators.required],
      fuel_use:['',Validators.required],
      tax:['',Validators.required],
      color:['',Validators.required],
     
      
      // vehicleregies: this.fb.array([]) ,
    });
  }

 
   
  newQuantity(): UntypedFormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.vehicleregies.push({
      id: this.vehicleregies.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.vehicleregies.splice(i, 1);
  }
      

  uploadFile(event) {
    

    const reader = new FileReader();
    
    this.selectedFile = <File>event.target.files[0];
      // debugger
      console.log(this.selectedFile);
  }

submitForm(){
   
  // console.log(this.studentregForm.value);
  var value = this.vehicleregForm.value
  

  var formData: any = new FormData();
      formData.append('reg_no', value.reg_no);
      formData.append('vehicle_type', value.vehicle_type);
      // formData.append('startedYear', value.startedYear);
      formData.append('reg_owner', value.reg_owner);
      formData.append('owner_address', value.owner_address);
      formData.append('month_manufacture', value.month_manufacture);
      formData.append('makers_class', value.makers_class);
      formData.append('seating_capacity', value.seating_capacity);
      formData.append('vehicle_num', value.vehicle_num);
      formData.append('reg_date', value.reg_date);
      formData.append('reg_photo', this.selectedFile, this.selectedFile.name);
      formData.append('fuel_use', value.fuel_use);
      formData.append('tax', value.tax);
      formData.append('color', value.color);
     
      
      console.log(formData);

    
    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */
    
    this.vehicleserve.Regvehicle(formData).subscribe((res:any)=>  {
      console.log(res)

      if(this.vehicleregies.length > 0){
        for(let i=0; i<this.vehicleregies.length; i++){    
          const extraData = {
            vehicle: res.id,
            name: this.vehicleregies[i].name,
            value: this.vehicleregies[i].value,
          };
          console.log('extraadataaa',extraData)

          this.vehicleserve.Regaddmorevehicle(extraData).subscribe((res:any)=>  {
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
    Swal.fire('Hi! Updated successfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Vehicle Registered successfully', 'success')
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
