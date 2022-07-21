import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogmarksheetComponent } from './dialogmarksheet.component';

describe('DialogmarksheetComponent', () => {
  let component: DialogmarksheetComponent;
  let fixture: ComponentFixture<DialogmarksheetComponent>;

  beforeEach(async(() => {
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
