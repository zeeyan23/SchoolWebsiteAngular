import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addclasswork',
  templateUrl: './addclasswork.component.html',
  styleUrls: ['./addclasswork.component.css']
})
export class AddclassworkComponent implements OnInit {

  classworkForm: FormGroup;

  constructor( private fb:FormBuilder) {
    
   }

  ngOnInit(): void {
    this.classworkForm= this.fb.group({
       
      class_name:['',Validators.required],
      section: ['',[Validators.required]],
      subject_name: ['',[Validators.required]],
      classwork_date: ['',[Validators.required]],
      remark: ['',Validators.required],
      classwork_text: ['',Validators.required]
    
     
     
      
     
    });
  }
      
  // get f(){
  //   return this.homeworkForm.controls;
  // }

  // uploadFile(event) {
    
  //   const reader = new FileReader();
    
  //   if(event.target.files && event.target.files.length) {
  //     const [homework_photo] = event.target.files;
  //     reader.readAsDataURL(homework_photo);
    
  //     reader.onload = () => {
   
  //       this.imageSrc = reader.result as string;
     
  //       this.homeworkForm.patchValue({
  //         fileSource: reader.result
  //       });
   
  //     };
   
  //   }
  // }
  onSubmit(){
    console.log("pooooost data",this.classworkForm.value);
    // this.feese.updateProduct(this.feetypeForm.value)
    // .subscribe(data=>  {
    //     console.log('daaaaaataaa:',data)
    //     console.log(this.feetypeForm.value);
    //     // this.router.navigate(['maps']);
      
    // });
}

}
