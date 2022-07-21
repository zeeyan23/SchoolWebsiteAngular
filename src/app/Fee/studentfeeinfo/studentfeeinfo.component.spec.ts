import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentfeeinfoComponent } from './studentfeeinfo.component';

describe('StudentfeeinfoComponent', () => {
  let component: StudentfeeinfoComponent;
  let fixture: ComponentFixture<StudentfeeinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentfeeinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentfeeinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
