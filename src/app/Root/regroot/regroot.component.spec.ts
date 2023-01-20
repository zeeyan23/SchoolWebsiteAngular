import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RegrootComponent } from './regroot.component';

describe('RegrootComponent', () => {
  let component: RegrootComponent;
  let fixture: ComponentFixture<RegrootComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RegrootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegrootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
