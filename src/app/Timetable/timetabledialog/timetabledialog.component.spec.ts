import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetabledialogComponent } from './timetabledialog.component';

describe('TimetabledialogComponent', () => {
  let component: TimetabledialogComponent;
  let fixture: ComponentFixture<TimetabledialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimetabledialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetabledialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
