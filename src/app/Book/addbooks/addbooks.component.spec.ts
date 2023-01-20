import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AddbooksComponent } from './addbooks.component';

describe('AddbooksComponent', () => {
  let component: AddbooksComponent;
  let fixture: ComponentFixture<AddbooksComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddbooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
