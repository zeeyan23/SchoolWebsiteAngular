import { BookService } from './../book.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-addbooks',
  templateUrl: './addbooks.component.html',
  styleUrls: ['./addbooks.component.css']
})
export class AddbooksComponent implements OnInit {
  addbookForm: FormGroup;
  isDean: boolean;
  isStaff: boolean;

  public bookies:any[]=[];

  constructor(private fb:FormBuilder, private bookserve : BookService) { }

  ngOnInit(): void {
    this.addbookForm = this.fb.group({
       
      accession_number:['',Validators.required],
      barcode_id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      subject: ['',Validators.required],
      author: ['',[Validators.required]],
      publisher: ['',Validators.required],
      edition: ['',Validators.required],
      year: ['',Validators.required],
      page: ['',Validators.required],
      topic:['',Validators.required],
      isbn:['',Validators.required],
      class_name:['',Validators.required],
      bill_num:['',Validators.required],
      book_num:['',Validators.required],
      cost:['',Validators.required],
      remark:['',Validators.required],
      // bookies: this.fb.array([]) ,
    });
    if(localStorage.getItem('group') == 'admin') {
      this.isDean = true;
    }
    else{
    this.isDean = false;}
  }

 
  newQuantity(): FormGroup {
    return this.fb.group({
     
    })
  }
   
  addQuantity() {
    this.bookies.push({
      id: this.bookies.length + 1,
      name: '',
      value: '',
    });
  }


   
  removeQuantity(i:number) {
    this.bookies.splice(i, 1);
  }
   
  submitForm(){
   
    // console.log(this.studentregForm.value);
    var value = this.addbookForm.value
    
  
    var formData: any = new FormData();
        formData.append('accession_number', value.accession_number);
        formData.append('barcode_id', value.barcode_id);
        // formData.append('startedYear', value.startedYear);
        formData.append('title', value.title);
        formData.append('subject', value.subject);
        formData.append('author', value.author);
        formData.append('publisher', value.publisher);
        formData.append('edition', value.edition);
        formData.append('year', value.year);
        formData.append('page', value.page);
        formData.append('topic', value.topic);
        formData.append('isbn', value.isbn);
        formData.append('class_name', value.class_name);
        formData.append('bill_num', value.bill_num);
        formData.append('book_num', value.book_num);
        formData.append('cost', value.cost);
        formData.append('remark', value.remark);
        
        
        console.log(formData);
  
      
      /* let headers = new HttpHeaders({
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Token ' + localStorage.getItem('token')
      }); */
      
      this.bookserve.Regbook(formData).subscribe((res:any)=>  {
        console.log(res)


        if(this.bookies.length > 0){
          for(let i=0; i<this.bookies.length; i++){    
            const extraData = {
              book: res.id,
              name: this.bookies[i].name,
              value: this.bookies[i].value,
            };
            console.log('extraadataaa',extraData)
  
            this.bookserve.Regaddmorebook(extraData).subscribe((res:any)=>  {
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
      Swal.fire('Hi! Book Updated successfully');
    }
    
    successAlertNotification(){
      Swal.fire('Hi', 'Books Registered successfully', 'success')
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
