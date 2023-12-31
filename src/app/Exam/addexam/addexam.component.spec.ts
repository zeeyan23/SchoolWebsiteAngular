import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddexamComponent } from './addexam.component';

describe('AddexamComponent', () => {
  let component: AddexamComponent;
  let fixture: ComponentFixture<AddexamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
