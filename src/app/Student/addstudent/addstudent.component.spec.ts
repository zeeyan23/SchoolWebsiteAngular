import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddstudentComponent } from './addstudent.component';

describe('AddstudentComponent', () => {
  let component: AddstudentComponent;
  let fixture: ComponentFixture<AddstudentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddstudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
