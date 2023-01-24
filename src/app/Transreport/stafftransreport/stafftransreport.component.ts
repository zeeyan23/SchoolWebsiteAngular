import { TransreporturlService } from "./../transreporturl.service";
import { Component, OnInit } from "@angular/core";
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from "@ng-bootstrap/ng-bootstrap";
import {
  UntypedFormGroup,
  FormControl,
  FormArray,
  UntypedFormBuilder,
  Validators,
} from "@angular/forms";

@Component({
  selector: "app-stafftransreport",
  templateUrl: "./stafftransreport.component.html",
  styleUrls: ["./stafftransreport.component.css"],
})
export class StafftransreportComponent implements OnInit {
  closeResult: string;
  stafreports: {
    saff_id: string;
    name: string;
    gender: string;
    mobile: string;
    vehicle_no: string;
    type: string;
    driver: string;
    emp_mob: string;
    route_name: string;
    stop_name: string;
    Amount: string;
  }[];
  stafrep: any;
  stafftransForm: UntypedFormGroup;
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
  constructor(
    private fb: UntypedFormBuilder,
    private transer: TransreporturlService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.stafreports = this.transer.Staffrepo;
    console.log("staff report", this.stafreports);

    this.stafftransForm = this.fb.group({
      saff_id: ["", Validators.required],
      name: ["", [Validators.required]],
      gender: ["", [Validators.required]],
      mobile: ["", Validators.required],
      vehicle_no: ["", [Validators.required]],
      type: ["", Validators.required],
      driver: ["", Validators.required],
      emp_mob: ["", Validators.required],
      route_name: ["", Validators.required],
      stop_name: ["", Validators.required],
    });
  }
  openStafftrans(stafftransinfomodal, stafrep) {
    this.stafrep = stafrep;
    console.log("id iss:", stafrep);
    this.modalService
      .open(stafftransinfomodal, { ariaLabelledBy: "modal-basic-title" })
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

  download() {
    let fileName = "StaffRouteList.csv";
    let columnNames = [
      "Staff ID",
      "Name",
      "gender",
      "Mobile",
      "Vehicle Number",
      "Type",
      "Driver name",
      "Driver Mobile",
      "Route Name",
      "Stop Name",
    ];
    let header = columnNames.join(",");

    let csv = header;
    csv += "\r\n";

    this.stafreports = this.transer.Staffrepo;
    console.log("tabledata:", this.stafreports);

    for (let i = 0; i < this.stafreports.length; ++i) {
      this.classname = this.stafreports[i].saff_id;
      this.academicyear = this.stafreports[i].name;
      this.admissionfee = this.stafreports[i].gender;
      this.tuitionfee = this.stafreports[i].mobile;
      this.examfee = this.stafreports[i].vehicle_no;
      this.computerfee = this.stafreports[i].type;
      this.transportfee = this.stafreports[i].driver;
      this.foodfee = this.stafreports[i].emp_mob;
      this.hostelfee = this.stafreports[i].route_name;
      this.miscfee = this.stafreports[i].stop_name;

      // console.log("Finalnumber",this.usernumber);
      csv += [
        [this.classname],
        [this.academicyear],
        [this.admissionfee],
        [this.tuitionfee],
        [this.examfee],
        [this.computerfee],
        [this.transportfee],
        [this.foodfee],
        [this.hostelfee],
        [this.miscfee],
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
}
