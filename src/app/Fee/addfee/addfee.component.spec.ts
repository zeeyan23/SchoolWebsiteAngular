import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddfeeComponent } from './addfee.component';

describe('AddfeeComponent', () => {
  let component: AddfeeComponent;
  let fixture: ComponentFixture<AddfeeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
