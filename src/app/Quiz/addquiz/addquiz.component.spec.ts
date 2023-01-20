import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddquizComponent } from './addquiz.component';

describe('AddquizComponent', () => {
  let component: AddquizComponent;
  let fixture: ComponentFixture<AddquizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
