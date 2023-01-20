import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddexpenseComponent } from './addexpense.component';

describe('AddexpenseComponent', () => {
  let component: AddexpenseComponent;
  let fixture: ComponentFixture<AddexpenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
