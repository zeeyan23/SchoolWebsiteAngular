import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddadvanceComponent } from './addadvance.component';

describe('AddadvanceComponent', () => {
  let component: AddadvanceComponent;
  let fixture: ComponentFixture<AddadvanceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddadvanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddadvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
