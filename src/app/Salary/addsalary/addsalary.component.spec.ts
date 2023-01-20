import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddsalaryComponent } from './addsalary.component';

describe('AddsalaryComponent', () => {
  let component: AddsalaryComponent;
  let fixture: ComponentFixture<AddsalaryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
