import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidstudentsComponent } from './paidstudents.component';

describe('PaidstudentsComponent', () => {
  let component: PaidstudentsComponent;
  let fixture: ComponentFixture<PaidstudentsComponent>;

  beforeEach(async(() => {
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
