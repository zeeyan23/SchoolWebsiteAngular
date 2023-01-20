import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TimetablelistComponent } from './timetablelist.component';

describe('TimetablelistComponent', () => {
  let component: TimetablelistComponent;
  let fixture: ComponentFixture<TimetablelistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetablelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetablelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
