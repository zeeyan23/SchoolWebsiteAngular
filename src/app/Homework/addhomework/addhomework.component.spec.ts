import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddhomeworkComponent } from './addhomework.component';

describe('AddhomeworkComponent', () => {
  let component: AddhomeworkComponent;
  let fixture: ComponentFixture<AddhomeworkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
