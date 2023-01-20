import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StafftransreportComponent } from './stafftransreport.component';

describe('StafftransreportComponent', () => {
  let component: StafftransreportComponent;
  let fixture: ComponentFixture<StafftransreportComponent>;

  beforeEach(waitForAsync(() => {
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
