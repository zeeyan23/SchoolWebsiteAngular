import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddfundComponent } from './addfund.component';

describe('AddfundComponent', () => {
  let component: AddfundComponent;
  let fixture: ComponentFixture<AddfundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
