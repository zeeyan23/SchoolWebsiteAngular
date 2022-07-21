import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuestudentsComponent } from './duestudents.component';

describe('DuestudentsComponent', () => {
  let component: DuestudentsComponent;
  let fixture: ComponentFixture<DuestudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuestudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuestudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
