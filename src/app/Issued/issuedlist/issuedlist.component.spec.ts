import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IssuedlistComponent } from './issuedlist.component';

describe('IssuedlistComponent', () => {
  let component: IssuedlistComponent;
  let fixture: ComponentFixture<IssuedlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IssuedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssuedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
