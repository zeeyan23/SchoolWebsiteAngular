import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddclassworkComponent } from './addclasswork.component';

describe('AddclassworkComponent', () => {
  let component: AddclassworkComponent;
  let fixture: ComponentFixture<AddclassworkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclassworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
