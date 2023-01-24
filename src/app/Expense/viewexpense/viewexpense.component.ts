import { ExpenseurlService } from './../expenseurl.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UntypedFormGroup, FormControl, FormArray, UntypedFormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-viewexpense',
  templateUrl: './viewexpense.component.html',
  styleUrls: ['./viewexpense.component.css']
})
export class ViewexpenseComponent implements OnInit {
 
  closeResult: string;
	expense: string;
	amount: string;
	datefex: string;
	paym: string;
	expensess: string;
	expenseForm: UntypedFormGroup;
	totalRec: number;
  page: number = 1;
  loading = false;
  term: any;
	selectedFile: File;
	expensesdetl: any;
	exproof: any;
	exdate: any;
	expenses: any;
	isDean: boolean;
	expensdate: any;
	expensdatess: string;
  constructor(private expenseserve:ExpenseurlService ,private modalService: NgbModal ,private fb:UntypedFormBuilder) { }

  ngOnInit(): void {
   

	this.expenseForm= this.fb.group({
       
		expense_type:['',Validators.required],
		expense_detail: ['',[Validators.required]],
		amount: ['',[Validators.required]],
		expense_proof: [null],
	   fileSource : ['',Validators.required],
		expense_date: ['',[Validators.required]],
		payment_mode: ['',Validators.required],
	
	   
	  });
	  if(localStorage.getItem('group') == 'admin') {
		this.isDean = true;
	}
	 else{
	  this.isDean = false;
	}

	  this.getexpenseDetails();
  }



  getexpenseDetails(){
    this.expenseserve.getExpenseDetails().subscribe((res: any) =>{
          console.log(res);
          this.expenses = res;
          // this.studentss = res;
          // this.studentId = this.students[0]["id"];
		  this.expensdate = this.expenses[0]['expense_date'];

        });
        console.log('reeeeeeeeeee',this.expenses);
        
      }

      uploadFile(event) {
    

        const reader = new FileReader();
        
        this.selectedFile = <File>event.target.files[0];
         
          console.log(this.selectedFile);
      }


      Updateexpense(Id: any){

        var value = this.expenseForm.value
        var formData: any = new FormData();
		formData.append('expense_type', value.expense_type);
		formData.append('expense_detail', value.expense_detail);
		// formData.append('startedYear', value.startedYear);
		formData.append('amount', value.amount);
		if(this.selectedFile != undefined){
		formData.append('expense_proof', this.selectedFile, this.selectedFile.name);
		}
		formData.append('expense_date', value.expense_date);
		formData.append('payment_mode', value.payment_mode);
		
            
            console.log(formData);
    
        
    this.expenseserve.Updatexpense(formData, Id).subscribe((res:any)=>  {
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
  openExpense(expenseinfomodal,expense) {
	  this.expense=expense;
	  this.expensdatess = new Date(this.expensdate).toISOString().slice(0, -1)
	  expense.expense_date = this.expensdatess;
		this.modalService.open(expenseinfomodal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
		let fileName = 'ExpenseList.csv';
		let columnNames = ["Expense Name","Expense Details","Amount","Expense Proof","Date Of Expense","Payment Mode"];
		let header = columnNames.join(',');
	
		let csv = header;
		csv += '\r\n';
	
	
		
		console.log('student list:',this.expenses)
		  for(let i=0 ;i < this.expenses.length; ++i){
		this.expensess=this.expenses[i].expense_type;
		this.expensesdetl=this.expenses[i].expense_detail;
	    this.amount=this.expenses[i].amount;
	    this.exproof=this.expenses[i].expense_proof;
	    this.exdate=this.expenses[i].expense_date;
	    this.paym=this.expenses[i].payment_mode
	 
	  
	
		// console.log("Finalnumber",this.usernumber);
		csv += [[this.expensess],[this.expensesdetl] ,[this.amount],[this.exproof],[this.exdate],[this.paym]].join(',');
		csv += '\r\n';
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
		Swal.fire('Hi! Expense updated sucessfully');
	  }
	  
	  successAlertNotification(){
		Swal.fire('Hi', 'Expense Registered successfully', 'success')
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
