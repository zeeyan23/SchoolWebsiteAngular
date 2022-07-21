import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudtransreportComponent } from './studtransreport.component';

describe('StudtransreportComponent', () => {
  let component: StudtransreportComponent;
  let fixture: ComponentFixture<StudtransreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudtransreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudtransreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
