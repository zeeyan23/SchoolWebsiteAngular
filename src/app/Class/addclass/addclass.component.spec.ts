import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddclassComponent } from './addclass.component';

describe('AddclassComponent', () => {
  let component: AddclassComponent;
  let fixture: ComponentFixture<AddclassComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddclassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
