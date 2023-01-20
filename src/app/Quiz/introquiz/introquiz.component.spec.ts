import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IntroquizComponent } from './introquiz.component';

describe('IntroquizComponent', () => {
  let component: IntroquizComponent;
  let fixture: ComponentFixture<IntroquizComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
