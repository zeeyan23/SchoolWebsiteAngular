import { VehicleurlService } from './../vehicleurl.service';
import { Component, OnInit } from '@angular/core';


import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms'

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-vehiclelist',
  templateUrl: './vehiclelist.component.html',
  styleUrls: ['./vehiclelist.component.css']
})
export class VehiclelistComponent implements OnInit {

  closeResult: string;
  data: any;
  private _id: any;
  class_name: any;
  feeDetail: any;
  editProfileForm: FormGroup;
  class: any;
  
  vehicleregForm: FormGroup;
  vehicles: any;
  classname: string;
  academicyear: string;
  admissionfee: string;
  tuitionfee: string;
  examfee: string;
  computerfee: string;
  transportfee: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  selectedFile: File;
  vehics: any;
  vehcleofschool: any;
  regno: any;
  vehictype: any;
  regowner: any;
  ownadrs: any;
  monofmanu: any;
  makrcls: string;
  seatcap: any;
  vehinum: any;
  regdate: any;
  regphoto: any;
  fuelu: any;
  taax: any;
  colors: any;
  vehic: any;
  isDean: boolean;
  vehidate: string;
  vehidates: any;
  momofman: string;
  manofmon: any;

  constructor(private fb: FormBuilder,private modalService: NgbModal, private vehicleserve:VehicleurlService) { }

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
      hypoth_to:['',Validators.required],
      
      vehicleregies: this.fb.array([]) ,
    });
    
   this.getvehicleDetails();
   if(localStorage.getItem('group') == 'admin') {
    this.isDean = true;
    
 }
 else{
  this.isDean = false;
 
 }
    
  }

  getvehicleDetails(){
    this.vehicleserve.getvehicleDetails().subscribe((res: any) =>{
          console.log(res);
          this.vehic = res;
          this.vehics = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
          this.vehidates = this.vehics[0]['reg_date'];
          this.manofmon = this.vehics[0]['month_manufacture'];
        });
        console.log('reeeeeeeeeee',this.vehic);
        
      }


      uploadFile(event) {
    

        const reader = new FileReader();
        
        this.selectedFile = <File>event.target.files[0];
         
          console.log(this.selectedFile);
      }


      Updatevehicle(Id: any){

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
        if(this.selectedFile != undefined){
        formData.append('reg_photo', this.selectedFile, this.selectedFile.name);
        }
        formData.append('fuel_use', value.fuel_use);
        formData.append('tax', value.tax);
        formData.append('color', value.color);
       
           
            console.log(formData);
    
        
    this.vehicleserve.Updatevehicle(formData, Id).subscribe((res:any)=>  {
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


    valueSelected(selectedvehiclenum:String ){
      this.vehcleofschool =this.vehics;
      console.log('studentdata',this.vehics);
    
      var filteredbook =this.vehcleofschool.filter(
        item => item.vehicle_num == selectedvehiclenum);
      this.vehic = filteredbook;
      console.log('result',this.vehic)
    }

  openVehicle(vehicleinfomodal, vehicles) {
    this.vehicles=vehicles;
    this.vehidate = new Date(this.vehidates).toISOString().slice(0, -1)
    this.momofman = new Date(this.manofmon).toISOString().slice(0, -1)
	  vehicles.reg_date = this.vehidate;
    vehicles.month_manufacture =this.momofman;
    console.log('id iss:',vehicles)
		this.modalService.open(vehicleinfomodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
 
   
  
      // this.feeDetail = {id:fee._id, class_name: fee.class_name, academic_year:fee.academic_year, tuition_fee:fee.tuition_fee};
    	this.closeResult = `Closed with: ${result}`;
		}, (reason) => {
			this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
		});
  
    
    
	}
  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return  `with: ${reason}`;
		}
	}

  download() {
    let fileName = "VehicleList.csv";
    let columnNames = [
      "Register Number",
      "Vehicle Type",
      "Registered Owner",
      "Owner Address",
      "Month of Manufacture",
      "Makers Class",
      "Seating Capacity",
      "Vehicle Number",
      "Vehicle Photo",
      "Fuel Use",
      "Tax",
      "Color"
     
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    
    console.log("tabledata:", this.vehic);

    for (let i = 0; i < this.vehic.length; ++i) {
      this.regno = this.vehic[i].reg_no;
      this.vehictype = this.vehic[i].vehicle_type;
      this.regowner = this.vehic[i].reg_owner;
      this.ownadrs = this.vehic[i].owner_address;
      this.monofmanu = this.vehic[i].month_manufacture;
      this.makrcls = this.vehic[i].makers_class;
      this.seatcap = this.vehic[i].seating_capacity
      this.vehinum = this.vehic[i].vehicle_num;
      this.regdate = this.vehic[i].reg_date;
      this.regphoto = this.vehic[i].reg_photo;
      this.fuelu = this.vehic[i].fuel_use;
      this.taax = this.vehic[i].tax;
      this.colors = this.vehic[i].color;
   

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.regno],
        [ this.vehictype],
        [this.regowner],
        [this.ownadrs],
        [this.monofmanu],
        [this.makrcls],
        [this.seatcap],
        [this.vehinum],
        [ this.regdate],
        [this.regphoto],
        [this.fuelu],
        [this.taax],
        [this.colors],
       
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


  simpleAlert(){
    Swal.fire('Hi! Vehicle updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'vehicle Registered successfully', 'success')
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
