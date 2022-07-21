import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolcalenderComponent } from './schoolcalender.component';

describe('SchoolcalenderComponent', () => {
  let component: SchoolcalenderComponent;
  let fixture: ComponentFixture<SchoolcalenderComponent>;

  beforeEach(async(() => {
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
