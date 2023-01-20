import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddrecievedComponent } from './addrecieved.component';

describe('AddrecievedComponent', () => {
  let component: AddrecievedComponent;
  let fixture: ComponentFixture<AddrecievedComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddrecievedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
