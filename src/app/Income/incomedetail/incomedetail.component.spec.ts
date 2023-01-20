import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncomedetailComponent } from './incomedetail.component';

describe('IncomedetailComponent', () => {
  let component: IncomedetailComponent;
  let fixture: ComponentFixture<IncomedetailComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
