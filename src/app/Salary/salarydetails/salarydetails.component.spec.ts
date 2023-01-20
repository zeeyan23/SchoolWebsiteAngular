import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SalarydetailsComponent } from './salarydetails.component';

describe('SalarydetailsComponent', () => {
  let component: SalarydetailsComponent;
  let fixture: ComponentFixture<SalarydetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
