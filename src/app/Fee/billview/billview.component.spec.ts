import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BillviewComponent } from './billview.component';

describe('BillviewComponent', () => {
  let component: BillviewComponent;
  let fixture: ComponentFixture<BillviewComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BillviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
