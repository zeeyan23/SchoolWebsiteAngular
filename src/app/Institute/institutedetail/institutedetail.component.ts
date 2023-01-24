import { InstituteurlService } from "./../instituteurl.service";
import { Component, OnInit } from "@angular/core";
import {
  HttpErrorResponse,
  HttpClient,
  HttpHeaders,
} from "@angular/common/http";
import { Instidata } from "./../instidata";
import {
  UntypedFormGroup,
  FormControl,
  FormArray,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";
import { trackByHourSegment } from "angular-calendar/modules/common/util";
import { environment } from "src/environments/environment";
import Swal from "sweetalert2/dist/sweetalert2.js";

@Component({
  selector: "app-institutedetail",
  templateUrl: "./institutedetail.component.html",
  styleUrls: ["./institutedetail.component.css"],
})
export class InstitutedetailComponent implements OnInit {
  instituteForm: UntypedFormGroup;
  imageSrc: string;
  institutedetail: any[];

  img: any;
  dat: any;
  instiiii: any = [];
  instiname: any;
  founder: any;
  startedYears: any;
  addresss: any;
  citys: any;
  state: any;
  country: any;
  selectedFile: File;
  quotationFile: File;
  serverUrl: any;
  requiredMsg: boolean;
  success: boolean;
  errMsg: boolean;
  showForm: boolean;
  showContact: boolean;
  instituteName: any;
  founderName: any;
  startedYear: any;
  affiliationName: any;
  address: any;
  city: any;
  shortCode: any;
  email: any;
  landline: any;
  contactNumber: any;
  institutionId: any;

  updateForm: boolean;
  saveForm: boolean;
  isDean: boolean;
  public institutemore: any[] = [];
  instit: any;

  constructor(
    private fb: UntypedFormBuilder,
    private insti: InstituteurlService,
    private http: HttpClient
  ) {
    // structure of form group

    this.instituteForm = this.fb.group({
      instituteName: ["", Validators.required],
      founderName: ["", [Validators.required]],
      // startedYear:["", Validators.required],
      affiliationName: ["", Validators.required],
      address: ["", Validators.required],
      city: ["", [Validators.required]],
      state: ["", Validators.required],
      country: ["", Validators.required],
      shortCode: ["", Validators.required],
      email: ["", Validators.required],
      landline: ["", Validators.required],
      contactNumber: ["", Validators.required],
      instituteLogo: [null],

      // institutemore: this.fb.array([]),
    });

    this.serverUrl = environment.serverUrl;
  }

  ngOnInit(): void {
    if(localStorage.getItem('group') == 'admin'){
      this.isDean = true;
   }
   else{
    this.isDean = false;
   }
    this.getInstitutionDetails();
    this.getaddmoreInstitutionDetails();
  }

  // upload file event

  onFileSelected(event) {
    // uploaded file details
    this.selectedFile = <File>event.target.files[0];
    // debugger
    console.log(this.selectedFile);
  }

  //  add more field functions

   newQuantity(): UntypedFormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.institutemore.push({
      id: this.institutemore.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.institutemore.splice(i, 1);
  }


   

  // function to get data from api

  getaddmoreInstitutionDetails() {
    this.insti.getaddmoreInstitutionDetails().subscribe((res: any) => {
      console.log(res);
      this.instit = res;
    });
    }

  getInstitutionDetails() {
    this.insti.getInstitutionDetails().subscribe((res: any) => {
      console.log(res);
      this.instiiii = res;

      this.instituteName = this.instiiii[0]["instituteName"];
      this.founderName = this.instiiii[0]["founderName"];
      // this.startedYear = this.instiiii[0]["startedYear"];
      this.affiliationName = this.instiiii[0]["affiliationName"];
      this.address = this.instiiii[0]["address"];
      this.city = this.instiiii[0]["city"];
      this.state = this.instiiii[0]["state"];
      this.country = this.instiiii[0]["country"];
      this.shortCode = this.instiiii[0]["shortCode"];
      this.email = this.instiiii[0]["email"];
      this.landline = this.instiiii[0]["landline"];
      this.contactNumber = this.instiiii[0]["contactNumber"];
      this.institutionId = this.instiiii[0]["id"];
      this.img = this.instiiii[0]["instituteLogo"];
      console.log(this.instiiii[0]["instituteLogo"]);
    });
    console.log("reeeeeeeeeee", this.instiiii);
  }

  // function to update data

  Updateinstitute(Id: any) {
    var value = this.instituteForm.value;
    const formData = new FormData();

    formData.append("instituteName", value.instituteName);
    formData.append("founderName", value.founderName);
    // formData.append('startedYear', value.startedYear);
    formData.append("affiliationName", value.affiliationName);
    formData.append("address", value.address);
    formData.append("city", value.city);
    formData.append("state", value.state);
    formData.append("country", value.country);
    formData.append("shortCode", value.shortCode);
    formData.append("email", value.email);
    formData.append("landline", value.landline);
    formData.append("contactNumber", value.contactNumber);
    if (this.selectedFile != undefined) {
      formData.append(
        "instituteLogo",
        this.selectedFile,
        this.selectedFile.name
      );
    }
    this.insti.Updateinstitute(formData, Id).subscribe(
      (res: any) => {
        console.log(res);


        if(this.institutemore.length > 0){
          for(let i=0; i<this.institutemore.length; i++){    
            const extraData = {
              instit: res.id,
              name: this.institutemore[i].name,
              value: this.institutemore[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.insti.Addmoreinstitutedata(extraData).subscribe((res:any)=>  {
              console.log(res)
            
          });
          }
        }

        this.successAlertNotification();
        // this.success = true;
        // this.errMsg = false;
        // this.showForm = false;
        // this.showContact = false;
        // this.router.navigate(['student/studentdetails']);
      },
      (error: HttpErrorResponse) => {
        this.erroalert();
        console.log(error);
        // this.success = false;
        // this.errMsg = true;
        // this.showForm = false;
        // this.showContact = false;
      }
    );

    window.location.reload();
  }

  // function to send data to the api

  submitForm() {
    console.log(this.instituteForm.value);
    var value = this.instituteForm.value;
    const formData = new FormData();

    formData.append("instituteName", value.instituteName);
    formData.append("founderName", value.founderName);
    // formData.append('startedYear', value.startedYear);
    formData.append("affiliationName", value.affiliationName);
    formData.append("address", value.address);
    formData.append("city", value.city);
    formData.append("state", value.state);
    formData.append("country", value.country);
    formData.append("shortCode", value.shortCode);
    formData.append("email", value.email);
    formData.append("landline", value.landline);
    formData.append("contactNumber", value.contactNumber);
    formData.append("instituteLogo", this.selectedFile, this.selectedFile.name);

    /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */

    this.insti.Reginstitute(formData).subscribe(
      (res: any) => {
        console.log(res);
        this.successAlertNotification();

        // this.success = true;
        // this.errMsg = false;
        // this.showForm = false;
        // this.showContact = false;
      },
      (error: HttpErrorResponse) => {
        this.erroalert();
        console.log(error);
        // this.success = false;
        // this.errMsg = true;
        // this.showForm = false;
        // this.showContact = false;
      }
    );
    this.saveForm = true;
    this.updateForm = false;
  }

  simpleAlert() {
    Swal.fire("Hi! Data updated successfully");
  }

  successAlertNotification() {
    Swal.fire("Institution Data Registered successfully", "success");
  }

  alertConfirmation() {
    Swal.fire({
      title: "Are you sure?",
      text: "Your Action cannot be rollback.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, go ahead.",
      cancelButtonText: "No, let me think again",
    }).then(result => {
      if (result.value) {
        Swal.fire("Done!", "Action performed successfully.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          "Cancelled",
          "Performed action record present in cloud and databstore.)",
          "error"
        );
      }
    });
  }

  erroalert() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      // footer: '<a href>Why do I have this issue?</a>',
    });
  }
}
