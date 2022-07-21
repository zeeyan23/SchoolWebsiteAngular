import { Component, OnInit } from "@angular/core";
import { HomeworkurlService } from "../../shared/services/homeworkurl.service";
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

@Component({
  selector: "app-classworklist",
  templateUrl: "./classworklist.component.html",
  styleUrls: ["./classworklist.component.css"],
})
export class ClassworklistComponent implements OnInit {
  works: any;
  term: any;
  closeResult: string;
  work: any;
  totalRec: number;
  page: number = 1;
  loading = false;
  classworkForm: FormGroup;
  constructor(
    private homeser: HomeworkurlService,
    private modalService: NgbModal,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.works = this.homeser.Classwork;
    this.classworkForm = this.fb.group({
      class_name: ["", Validators.required],
      section: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      classwork_date: ["", [Validators.required]],
      remark: ["", Validators.required],
      classwork: ["", Validators.required],
    });
  }

  openclasswork(classworkinfomodal, work) {
    this.work = work;
    this.modalService
      .open(classworkinfomodal, { ariaLabelledBy: "modal-basic-title" })
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
}
