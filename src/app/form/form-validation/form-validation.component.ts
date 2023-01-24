import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, UntypedFormControl, UntypedFormGroup, Validators, NgForm } from '@angular/forms';

@Component({
  templateUrl: './form-validation.component.html'
})
export class FormvalComponent implements OnInit{
    @ViewChild('f', {static:true}) floatingLabelForm: NgForm;
    @ViewChild('vform', {static:true}) validationForm: UntypedFormGroup;
    regularForm: UntypedFormGroup;
    radioOptions = ['Choose this', 'Choose me'];

    ngOnInit() {
        this.regularForm = new UntypedFormGroup({
            'inputEmail': new UntypedFormControl(null, [Validators.required, Validators.email]),
            'password': new UntypedFormControl(null, [Validators.required, Validators.minLength(4), Validators.maxLength(24)]),
            'textArea': new UntypedFormControl(null, [Validators.required]),
            'radioOption': new UntypedFormControl('Option one is this')
        }, {updateOn: 'blur'});
    }

    onReactiveFormSubmit() {
        this.regularForm.reset();
    }
    onTemplateFormSubmit() {
        this.floatingLabelForm.reset();
    }
    onCustomFormSubmit() {
        this.validationForm.reset();
    }

}
