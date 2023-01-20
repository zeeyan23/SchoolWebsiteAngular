import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ViewfeetypesComponent } from './viewfeetypes.component';

describe('ViewfeetypesComponent', () => {
  let component: ViewfeetypesComponent;
  let fixture: ComponentFixture<ViewfeetypesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewfeetypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewfeetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
