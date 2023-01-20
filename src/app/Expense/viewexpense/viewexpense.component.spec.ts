import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewexpenseComponent } from './viewexpense.component';

describe('ViewexpenseComponent', () => {
  let component: ViewexpenseComponent;
  let fixture: ComponentFixture<ViewexpenseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewexpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewexpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
