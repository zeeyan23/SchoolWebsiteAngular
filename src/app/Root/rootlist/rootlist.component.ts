import { RooturlService } from './../rooturl.service';
import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from "@angular/forms";
import Swal from 'sweetalert2/dist/sweetalert2.js';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-rootlist',
  templateUrl: './rootlist.component.html',
  styleUrls: ['./rootlist.component.css']
})
export class RootlistComponent implements OnInit {


  closeResult: string;
  data: any;
  private _id: any;
  class_name: any;
  feeDetail: any;
  editProfileForm: FormGroup;
  class: any;

  routeregForm: FormGroup;
  root: any;
 
  classname: any;
  academicyear: any;
  admissionfee: any;
  tuitionfee: any;
  examfee: any;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  selectedFile: File;
  rootss: any;
  rootsofschool: any;
  RouteName: string;
  vehicleno: string;
  drivrname: string;
  amounts: string;
  mobnum: string;
  vehitype: any;
  roots: any;
  isDean: boolean;

  constructor(private fb: FormBuilder,private modalService: NgbModal,private rootserv :RooturlService) { }

  ngOnInit(): void {

  

    this.routeregForm = this.fb.group({
      Route_name: ["", Validators.required],
      vehicle_num: ["", [Validators.required]],
      Driver_name: ["", [Validators.required]],
      amount: ["", Validators.required],
      mobile_num: ["", [Validators.required]],
      vehicle_type: ["", Validators.required],
      routeregies: this.fb.array([]),
    });
     
    
   this.getrouteDetails();
   if(localStorage.getItem('group') == 'admin') {
    this.isDean = true;
  }
 else{
  this.isDean = false;
 }
    
  }


  getrouteDetails(){
    this.rootserv.getrouteDetails().subscribe((res: any) =>{
          console.log(res);
          this.roots = res;
          this.rootss = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
        });
        console.log('reeeeeeeeeee',this.roots);
        
      }

      valueSelectedd(selectedroute:String){
        this.rootsofschool=this.rootss;
        console.log('studentdata',this.rootss);
      
        var filteredroll = this.rootsofschool.filter(
          item => item.Route_name == selectedroute
        );
        this.roots = filteredroll;
        console.log('result', filteredroll)
     }

   


      Updateroute(Id: any){

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
    
        
    this.rootserv.Updateroute(formData, Id).subscribe((res:any)=>  {
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

  openRoot(rootinfomodal, root){
    this.root=root;
    console.log('id iss:',root)
		this.modalService.open(rootinfomodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
 
    
  
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
    let fileName = "RootList.csv";
    let columnNames = [
      "Route Name",
      "Vehicle Number",
      "Driver Name",
      "Amount",
      "Mobile Number",
      "vehicle type",
     
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

   
    console.log("tabledata:", this.roots);

    for (let i = 0; i < this.roots.length; ++i) {
      this.RouteName = this.roots[i].Route_name;
      this.vehicleno = this.roots[i].vehicle_num;
      this.drivrname = this.roots[i].Driver_name;
      this.amounts = this.roots[i].amount;
      this.mobnum = this.roots[i].mobile_num;
      this.vehitype = this.roots[i].vehicle_type;
     
    

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.RouteName],
        [this.vehicleno],
        [this.drivrname ],
        [this.amounts],
        [this.mobnum],
        [this.vehitype]
       
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
    Swal.fire('Hi !Route updated sucessfully');
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
