import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdvancedetailsComponent } from './advancedetails.component';

describe('AdvancedetailsComponent', () => {
  let component: AdvancedetailsComponent;
  let fixture: ComponentFixture<AdvancedetailsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
