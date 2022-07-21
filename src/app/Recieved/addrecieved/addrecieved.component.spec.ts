import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddrecievedComponent } from './addrecieved.component';

describe('AddrecievedComponent', () => {
  let component: AddrecievedComponent;
  let fixture: ComponentFixture<AddrecievedComponent>;

  beforeEach(async(() => {
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
