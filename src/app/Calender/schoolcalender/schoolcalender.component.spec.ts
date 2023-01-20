import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SchoolcalenderComponent } from './schoolcalender.component';

describe('SchoolcalenderComponent', () => {
  let component: SchoolcalenderComponent;
  let fixture: ComponentFixture<SchoolcalenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolcalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
