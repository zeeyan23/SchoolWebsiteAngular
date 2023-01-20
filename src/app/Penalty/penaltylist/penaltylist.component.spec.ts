import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PenaltylistComponent } from './penaltylist.component';

describe('PenaltylistComponent', () => {
  let component: PenaltylistComponent;
  let fixture: ComponentFixture<PenaltylistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PenaltylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenaltylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
