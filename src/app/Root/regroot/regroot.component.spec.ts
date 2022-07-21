import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrootComponent } from './regroot.component';

describe('RegrootComponent', () => {
  let component: RegrootComponent;
  let fixture: ComponentFixture<RegrootComponent>;

  beforeEach(async(() => {
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
