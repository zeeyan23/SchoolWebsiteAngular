import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PaidstudentsComponent } from './paidstudents.component';

describe('PaidstudentsComponent', () => {
  let component: PaidstudentsComponent;
  let fixture: ComponentFixture<PaidstudentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PaidstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaidstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
