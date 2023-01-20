import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DuestudentsComponent } from './duestudents.component';

describe('DuestudentsComponent', () => {
  let component: DuestudentsComponent;
  let fixture: ComponentFixture<DuestudentsComponent>;

  beforeEach(waitForAsync(() => {
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
