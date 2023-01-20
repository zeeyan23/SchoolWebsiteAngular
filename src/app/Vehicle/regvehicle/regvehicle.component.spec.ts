import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegvehicleComponent } from './regvehicle.component';

describe('RegvehicleComponent', () => {
  let component: RegvehicleComponent;
  let fixture: ComponentFixture<RegvehicleComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
