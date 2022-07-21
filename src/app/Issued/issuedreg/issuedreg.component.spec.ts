import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssuedregComponent } from './issuedreg.component';

describe('IssuedregComponent', () => {
  let component: IssuedregComponent;
  let fixture: ComponentFixture<IssuedregComponent>;

  beforeEach(async(() => {
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
