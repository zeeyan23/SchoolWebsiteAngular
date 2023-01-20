import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExpensedialogComponent } from './expensedialog.component';

describe('ExpensedialogComponent', () => {
  let component: ExpensedialogComponent;
  let fixture: ComponentFixture<ExpensedialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpensedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpensedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
