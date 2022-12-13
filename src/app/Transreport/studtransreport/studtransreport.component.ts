import { TransreporturlService } from "./../transreporturl.service";
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
import { StudenturlService } from "src/app/shared/services/studenturl.service";
import { Observable } from "rxjs/Observable";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { VehicleurlService } from "src/app/vehicle/vehicleurl.service";
import { RooturlService } from "src/app/root/rooturl.service";

@Component({
  selector: "app-studtransreport",
  templateUrl: "./studtransreport.component.html",
  styleUrls: ["./studtransreport.component.css"],
})
export class StudtransreportComponent implements OnInit {

  closeResult: string;
  stud: any;
  studtransForm: FormGroup;
  classname: string;
  academicyear: string;
  admissionfee: string;
  tuitionfee: string;
  examfee: string;
  computerfee: string;
  transportfee: string;
  foodfee: string;
  hostelfee: string;
  miscfee: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
  students: any;
  transport_fee: boolean;
  trans: any;
  studreports: any;
 
  overallget: any;
  data: any;
  transrepo: any;
  alldata: any;
  studreportss: any;
  vehicle: any;
  root: any;
  studreportsofschool: any;
  selectedvehicleno: any;
  rootdatas: any;
  types: any;
  driver_name: any;
  emp_mobile: any;
  stop_name: any;
  route_name: any;
  Route_name: any;
  regno: any;
  studname: any;
  gendr: any;
  contactno: any;
  vehiclenum: any;
  typs: any;
  drivrname: any;
  empmob: any;
  routenam: any;
  stopname: any;
  isDean: boolean;
  isStaff: boolean;
 
  
  constructor(
    private fb: FormBuilder,
    private transer: TransreporturlService,
    private modalService: NgbModal,
    private studentserve : StudenturlService,
    private vehicleserve :VehicleurlService,
    private rootserve :RooturlService
  ) {}

  ngOnInit(): void {
 
    this.studtransForm = this.fb.group({
      reg_number: ["", Validators.required],
      student_name: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      class_name: ["", Validators.required],
      contact_num: ["", [Validators.required]],
      vehicleno: ["", Validators.required],
      types: ["", Validators.required],
      driver_name: ["", Validators.required],
      emp_mobile: ["", Validators.required],
      route_name: ["", Validators.required],
      stop_name: ["", Validators.required],
    });

    // this.getStudentDetails();
    this.getTransportrepoDetails();
    this.getclassDetails();
    this.getrootDetails();

    if(localStorage.getItem('group') == 'admin' || localStorage.getItem('group') == 'staff') {
      this.isDean = true;
      this.isStaff = true;
      
    }
    else{
    this.isDean = false;
    this.isStaff = false;
    
    }
  }

  getclassDetails(){
    this.vehicleserve.getvehicleDetails().subscribe((res: any) =>{
          console.log(res);
          this.vehicle = res;
          
        });
        console.log('class',this.vehicle);
        
      }

      getrootDetails(){
        this.rootserve.getrouteDetails().subscribe((res: any) =>{
              console.log(res);
              this.root = res;
              
            });
            console.log('class',this.root);
            
          }
        
 

  public getTransportrepoDetails(){
        
        this.transer.gettransrepoDetails().subscribe((data: any) =>{
              console.log(data);
         
            this.transrepo =data;
            this.getStudentDetails(data);

          
            console.log('this is transreport data',this.transrepo);
              
            
            });
     }



     getStudentDetails(transrepo){
      this.studentserve.getStudentDetails().subscribe((res: any) =>{
            console.log(res);
            this.trans =res;
            this.transport_fee = res[0]['transport_fee']
            this.transrepo = transrepo;
  
            console.log(this.transport_fee)
            this.studreports = res.filter(x => x.transport_fee != 0);
            this.trans = res.filter(x => x.transport_fee != 0);
         
        //  var trans = this.getTransportrepoDetails();
        //  console.log('check',trans);
        //    this.alldata = this.studreports.forEach(element=> { element.reg_number, console.log(element)
        //    });
        //    console.log(this.alldata);

        //  if(this.studreports.reg_number === this.transrepo.student){
          
        //   this.studreportss = this.studreports.concat(this.transrepo); 
        //   console.log('final',this.studreportss);
        //  }

        // this.studreports.forEach((item, row) => {
        //   let finds = this.transrepo.find((element) => {
        //     return item.reg_number === element.student
        //   });
        
        //   this.studreportss.push(Object.assign({}, item, finds || {}));
        // });
        // console.log(this.studreportss);

        console.log('traaaaa', this.transrepo );
        this.studreportss = this.studreports.map(
          function (value) {
            return { ...value, ...this[value.reg_number] }
          },
          this.transrepo = this.transrepo.reduce((lut, value) => Object.assign(lut, { [value.student]: value }),
            {}
          )
        )
        console.log(this.studreportss)

        
          })
         
     }

    public valueSelected() {
      // alert(this.selectedclass);
      var rootList = this.root;
      
      console.log(rootList);
      console.log(this.selectedvehicleno);
      console.log(typeof(this.selectedvehicleno));
      
      this.rootdatas=this.root.filter(
      item => item.vehicle_num == this.selectedvehicleno);
      console.log('list..........',this.rootdatas)
      this.Route_name = this.rootdatas[0]['route_name'];
      this.types = this.rootdatas[0]['vehicle_type'];
      this.driver_name = this.rootdatas[0]['Driver_name'];
      this.emp_mobile = this.rootdatas[0]['mobile_num'];
      
     
      // this.route_name = this.rootdatas[0]['Route_name'];
      
      console.log('types..........',this.rootdatas)
      }

      valueSelectedd(selectedroll:String){
        this.studreportsofschool=this.trans;
        console.log('studentdata',this.trans);
      
        var filteredroll = this.studreportsofschool.filter(
          item => item.reg_number == selectedroll
        );
        this.studreportss = filteredroll;
        console.log('result', filteredroll)
     }

   

   
  




  openstudenttrans(studenttransinfomodal, stud) {
    this.stud = stud;
    console.log("id iss:", this.types);
    this.Route_name = stud.route_name;
    this.types= stud.types ;
    this.driver_name= stud.driver_name ;
    this.emp_mobile= stud.emp_mobile ;
    this.modalService
      .open(studenttransinfomodal, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
          // this.feeDetail = {id:fee._id, class_name: fee.class_name, academic_year:fee.academic_year, tuition_fee:fee.tuition_fee};
          this.closeResult = `Closed with: ${result}`;
        },
        reason => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
    // console.log('heeyyyy:', stud['class_name']);
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




  onSubmit(reg_number: any){
   
    // console.log(this.studentregForm.value);
    var value = this.studtransForm.value
    
  
    var formData: any = new FormData();
        formData.append('reg_number', value.reg_number);
        formData.append('vehicleno', value.vehicleno);
        formData.append('types', value.types);
        formData.append('driver_name', value.driver_name);
        formData.append('emp_mobile', value.emp_mobile);
        formData.append('route_name', value.route_name);
        formData.append('stop_name', value.stop_name);
        
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.transer.Regtransrepo(formData, reg_number).subscribe((res:any)=>  {
        console.log(res)
       
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

  download() {
    let fileName = "StudentRouteList.csv";
    let columnNames = [
      "Register Number",
      "Name",
      "Gender",
      "Class",
      "Mobile",
      "Vehicle Number",
      "Type",
      "Driver Name",
      "Driver Mobile",
      "Route Name",
      "Stop Name",
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

   
    console.log("student report", this.studreportss);

    for (let i = 0; i < this.studreportss.length; ++i) {
      this.regno = this.studreportss[i].reg_number;
      this.studname = this.studreportss[i].student_name;
      this.gendr = this.studreportss[i].gender;
      this.classname = this.studreportss[i].class_name;
      this.contactno = this.studreportss[i].contact_num;
      this.vehiclenum = this.studreportss[i].vehicleno;
      this.typs = this.studreportss[i].types;
      this.drivrname = this.studreportss[i].driver_name;
      this.empmob = this.studreportss[i].emp_mobile;
      this.routenam = this.studreportss[i].route_name;
      this.stopname = this.studreportss[i].stop_name;

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.regno],
        [this.studname],
        [this.gendr],
        [this.classname],
        [this.contactno ],
        [this.vehiclenum],
        [this.typs],
        [this.drivrname],
        [this.empmob],
        [this.routenam],
        [this.stopname]
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
  Swal.fire('Hi! Report Updated successfully');
}

successAlertNotification(){
  Swal.fire('Hi', 'Student Transport Report added successfully', 'success')
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




