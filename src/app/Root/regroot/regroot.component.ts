import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import { RooturlService } from "../rooturl.service";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { VehicleurlService } from "src/app/vehicle/vehicleurl.service";

@Component({
  selector: "app-regroot",
  templateUrl: "./regroot.component.html",
  styleUrls: ["./regroot.component.css"],
})
export class RegrootComponent implements OnInit {
  routeregForm: FormGroup;
  vehicle: any;

  public routeregies:any[]=[]

  constructor(private fb: FormBuilder,  private rootserve :RooturlService , private vehicleserve :VehicleurlService) {}

  ngOnInit() {
    this.routeregForm = this.fb.group({
      Route_name: ["", Validators.required],
      vehicle_num: ["", [Validators.required]],
      Driver_name: ["", [Validators.required]],
      amount: ["", Validators.required],
      mobile_num: ["", [Validators.required]],
      vehicle_type: ["", Validators.required],
      // routeregies: this.fb.array([]),
    });
    this.getclassDetails();
  }


  getclassDetails(){
    this.vehicleserve.getvehicleDetails().subscribe((res: any) =>{
          console.log(res);
          this.vehicle = res;
          
        });
        console.log('class',this.vehicle);
        
      }
 

 
  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.routeregies.push({
      id: this.routeregies.length + 1,
      name: '',
      value: '',
    });
  }

  removeQuantity(i:number) {
    this.routeregies.splice(i, 1);
  }


submitForm(){
   
  // console.log(this.studentregForm.value);
  var value = this.routeregForm.value
  

  var formData: any = new FormData();
      formData.append('Route_name', value.Route_name);
      formData.append('vehicle_num', value.vehicle_num);
      // formData.append('startedYear', value.startedYear);
      formData.append('Driver_name', value.Driver_name);
      formData.append('amount', value.amount);
      formData.append('mobile_num', value.mobile_num);
      formData.append('vehicle_type', value.vehicle_type);
      
      console.log(formData);

    
    /* let headers = new HttpHeaders({
      // 'Content-Type': 'multipart/form-data',
      'Authorization': 'Token ' + localStorage.getItem('token')
    }); */
    
    this.rootserve.Regroute(formData).subscribe((res:any)=>  {
      console.log(res)

      if(this.routeregies.length > 0){
        for(let i=0; i<this.routeregies.length; i++){    
          const extraData = {
            route: res.id,
            name: this.routeregies[i].name,
            value: this.routeregies[i].value,
          };
          console.log('extraadataaa',extraData)

          this.rootserve.Regaddmoreroute(extraData).subscribe((res:any)=>  {
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
    Swal.fire('Hi !Route Updated successfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Route Registered successfully', 'success')
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
