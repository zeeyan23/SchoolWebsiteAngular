import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DialogmarksheetComponent } from './dialogmarksheet.component';

describe('DialogmarksheetComponent', () => {
  let component: DialogmarksheetComponent;
  let fixture: ComponentFixture<DialogmarksheetComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogmarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
