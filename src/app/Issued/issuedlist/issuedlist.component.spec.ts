import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedlistComponent } from './issuedlist.component';

describe('IssuedlistComponent', () => {
  let component: IssuedlistComponent;
  let fixture: ComponentFixture<IssuedlistComponent>;

  beforeEach(async(() => {
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
