import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LeaveapplComponent } from './leaveappl.component';

describe('LeaveapplComponent', () => {
  let component: LeaveapplComponent;
  let fixture: ComponentFixture<LeaveapplComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveapplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveapplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
