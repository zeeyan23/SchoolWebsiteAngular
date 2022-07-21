import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenaltylistComponent } from './penaltylist.component';

describe('PenaltylistComponent', () => {
  let component: PenaltylistComponent;
  let fixture: ComponentFixture<PenaltylistComponent>;

  beforeEach(async(() => {
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
