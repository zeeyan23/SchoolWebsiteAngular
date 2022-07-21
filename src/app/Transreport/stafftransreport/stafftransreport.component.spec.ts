import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StafftransreportComponent } from './stafftransreport.component';

describe('StafftransreportComponent', () => {
  let component: StafftransreportComponent;
  let fixture: ComponentFixture<StafftransreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StafftransreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StafftransreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
