import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmarksheetComponent } from './addmarksheet.component';

describe('AddmarksheetComponent', () => {
  let component: AddmarksheetComponent;
  let fixture: ComponentFixture<AddmarksheetComponent>;

  beforeEach(async(() => {
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
