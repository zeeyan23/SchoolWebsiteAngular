import { LeaveurlService } from "./../leaveurl.service";
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
import { Leavedata } from "../leavedata";
import { HttpErrorResponse } from "@angular/common/http";
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: "app-leavereport",
  templateUrl: "./leavereport.component.html",
  styleUrls: ["./leavereport.component.css"],
})
export class LeavereportComponent implements OnInit {
  closeResult: string;
  leave: any;
  leaveForm: FormGroup;
  leaves: any;
  userid: string;
  userrole: string;
  usename: string;
  leavetype: string;
  leavefrom: string;
  leaveto: string;
  leavereason: string;
  status: string;
  totalRec: number;
  page: number = 1;
  loading = false;
  term:any;
	leavedetail: Leavedata[];

  popoverTitle = 'Delete this Leave application';
  popoverMessage = 'Are you sure want to delete Permanently?';
  confirmClicked = false;
  cancelClicked = false;
  leavestab: any;
  leavesofschool: any;
  isDean: boolean;
  isStaff: boolean;
  isParent: boolean;
  levto: any;
  levfrom: any;
  levefrm: string | number | Date;
  levet: string | number | Date;
  leavesadd: any;

  constructor(
    private leaveser: LeaveurlService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    
    console.log("leave datas:", this.leaves);

    this.leaveForm = this.fb.group({
      user_num: ["", Validators.required],
      user_role: ["", [Validators.required]],
      username: ["", Validators.required],
      leave_type: ["", [Validators.required]],
      leave_form: ["", Validators.required],
      leave_to: ["", [Validators.required]],
      leave_reason: ["", [Validators.required]],
      leave_status:  ["", [Validators.required]],
    });

    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
    } else{
      this.isDean = false;
    } 
    if(localStorage.getItem('group') == 'staff'){
      this.isStaff = true;
    } else {
      this.isStaff = false;
    } 
    if(localStorage.getItem('group') == 'parents' ) {
      this.isParent =true;
   } else{
     this.isParent = false;
   }
    this.getLeaveDetails();
    
  }
  openLeave(leaveapplicationmodal, leave) {
    this.leave = leave;
    this.levfrom = new Date(this.levefrm).toISOString().slice(0, -1)
    leave.leave_form= this.levfrom;
    this.levto = new Date(this.levet).toISOString().slice(0, -1)
    leave.leave_to = this.levto;
    this.modalService
      .open(leaveapplicationmodal, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        result => {
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
    let fileName = "LeaveList.csv";
    let columnNames = [
      "UserId",
      "User Role",
      "User Name",
      "Leave Type",
      "Leave From",
      "Leave To",
      "Leave Reason",
      "status",
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    
    console.log("student list:", this.leaves);
    for (let i = 0; i < this.leaves.length; ++i) {
      this.userid = this.leaves[i].user_num;
      this.userrole = this.leaves[i].user_role;
      this.usename = this.leaves[i].username;
      this.leavetype = this.leaves[i].leave_type;
      this.leavefrom = this.leaves[i].leave_form;
      this.leaveto = this.leaves[i].leave_to;
      this.leavereason = this.leaves[i].leave_reason;
      this.status = this.leaves[i].leave_status;

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.userid],
        [this.userrole],
        [this.usename],
        [this.leavetype],
        [this.leavefrom],
        [this.leaveto],
        [this.leavereason],
        [this.status],
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

  getLeaveDetails(){
    this.leaveser.getleaveDetails().subscribe((res: any) =>{
          console.log(res);
          this.leaves = res;
          this.leavestab = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
          this.levefrm = this.leavestab[0]['leave_form']
          this.levet = this.leavestab[0]['leave_to']
        });
        console.log('reeeeeeeeeee',this.leaves);
        
      }



      getaddmoreLeaveDetails(){
        this.leaveser.getaddmoreleaveDetails().subscribe((res: any) =>{
              console.log(res);
              this.leavesadd = res;
              console.log('reeeeeeeeeee',this.leaves);
            });
            
            
          }

      Updateleave(Id: any){

        var value = this.leaveForm.value
        var formData: any = new FormData();
        formData.append('user_num', value.user_num);
        formData.append('user_role', value.user_role);
        formData.append('username', value.username);
        formData.append('leave_type', value.leave_type);
        formData.append('leave_form', value.leave_form);
        formData.append('leave_to', value.leave_to);
        formData.append('leave_reason', value.leave_reason);
        formData.append('leave_status', value.leave_status);
            console.log(formData);
    
        
    this.leaveser.Updateleave(formData, Id).subscribe((res:any)=>  {
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
  
  }
  simpleAlert(){
    Swal.fire('Hi! Leave Application updated sucessfully');
  }
  
  successAlertNotification(){
    Swal.fire('Hi', 'Leave Application Sent successfully', 'success')
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
    this.leaveser.deleteLeave(Id)//method name in your services.ts file
    .subscribe(data =>{
      this.leaves =data;
    });
    for(let i = 0; i < this.leaves.length; ++i){
      if (this.leaves[i].id === Id) {
          this.leaves.splice(i,1);
      }
  }

}

valueSelectedd(selectedname:String){
  this.leavesofschool=this.leavestab;
  console.log('studentdata',this.leaves);

  var filteredname = this.leavesofschool.filter(
    item => item.username == selectedname
  );
  this.leaves = filteredname;
  console.log('result', filteredname)
}




}
