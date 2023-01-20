import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IssuedregComponent } from './issuedreg.component';

describe('IssuedregComponent', () => {
  let component: IssuedregComponent;
  let fixture: ComponentFixture<IssuedregComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
