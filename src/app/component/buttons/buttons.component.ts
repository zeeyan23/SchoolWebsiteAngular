import { Component } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
@Component({
  templateUrl: 'buttons.component.html'
})
export class ButtonsComponent {
  public checkboxGroupForm: UntypedFormGroup;

  public radioGroupForm: UntypedFormGroup;

  constructor(private formBuilder: UntypedFormBuilder) {}

  model = {
    left: true,
    middle: false,
    right: false
  };

  model1 = 1;

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.checkboxGroupForm = this.formBuilder.group({
      left: true,
      middle: false,
      right: false
    });

    this.radioGroupForm = this.formBuilder.group({
      model: 1
    });
  }
}
