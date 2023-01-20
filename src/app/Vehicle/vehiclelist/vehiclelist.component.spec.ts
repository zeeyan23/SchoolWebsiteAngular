import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VehiclelistComponent } from './vehiclelist.component';

describe('VehiclelistComponent', () => {
  let component: VehiclelistComponent;
  let fixture: ComponentFixture<VehiclelistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
