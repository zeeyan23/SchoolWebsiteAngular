import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-sendnotification',
  templateUrl: './sendnotification.component.html',
  styleUrls: ['./sendnotification.component.css']
})
export class SendnotificationComponent implements OnInit {

  imageSrc: string;
  notificationForm: FormGroup;
  isDean: boolean;
  isStaff: boolean;
  constructor( private fb:FormBuilder) {
  
   }

  ngOnInit(): void {
    this.notificationForm= this.fb.group({
       
      Send_from:['',Validators.required],
      send_to: ['',[Validators.required]],
      // noty_image: ['',[Validators.required]],
      noty_image: [null],
      noty_message : ['',Validators.required],
      expensies: this.fb.array([]) ,
      
     
    });

    if(localStorage.getItem('group') == 'admin' || localStorage.getItem('group') == 'staff') {
      this.isDean = true;
      this.isStaff = true;
      
   }
   else{
    this.isDean = false;
    this.isStaff = false;
    
   }
  }
  expensies() : FormArray {
    return this.notificationForm.get("expensies") as FormArray
  }
   
  newQuantity(): FormGroup {
    return this.fb.group({
      name: '',
      value: '',
    })
  }
   
  addQuantity() {
    this.expensies().push(this.newQuantity());
  }
   
  removeQuantity(i:number) {
    this.expensies().removeAt(i);
  }
   
      
  get f(){
    return this.notificationForm.controls;
  }

  uploadFile(event) {
    // const file = (event.target as HTMLInputElement).files[0];
    // this.instituteForm.patchValue({
    //   insti_logo: file
    // });
    // this.instituteForm.get('insti_logo').updateValueAndValidity()

    const reader = new FileReader();
    
    if(event.target.files && event.target.files.length) {
      const [expense_proof] = event.target.files;
      reader.readAsDataURL(expense_proof);
    
      reader.onload = () => {
   
        this.imageSrc = reader.result as string;
     
        this.notificationForm.patchValue({
          fileSource: reader.result
        });
   
      };
   
    }
  }
  onSubmit(){
    console.log("pooooost data",this.notificationForm.value);
    // this.feese.updateProduct(this.feetypeForm.value)
    // .subscribe(data=>  {
    //     console.log('daaaaaataaa:',data)
    //     console.log(this.feetypeForm.value);
    //     // this.router.navigate(['maps']);
      
    // });
}

}

