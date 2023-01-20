import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RootlistComponent } from './rootlist.component';

describe('RootlistComponent', () => {
  let component: RootlistComponent;
  let fixture: ComponentFixture<RootlistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RootlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
