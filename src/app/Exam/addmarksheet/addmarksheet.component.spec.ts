import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddmarksheetComponent } from './addmarksheet.component';

describe('AddmarksheetComponent', () => {
  let component: AddmarksheetComponent;
  let fixture: ComponentFixture<AddmarksheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddmarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
