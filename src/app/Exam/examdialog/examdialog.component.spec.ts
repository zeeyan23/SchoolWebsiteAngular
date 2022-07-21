import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamdialogComponent } from './examdialog.component';

describe('ExamdialogComponent', () => {
  let component: ExamdialogComponent;
  let fixture: ComponentFixture<ExamdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
