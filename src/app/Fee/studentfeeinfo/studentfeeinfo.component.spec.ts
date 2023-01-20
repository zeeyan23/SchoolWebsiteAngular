import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StudentfeeinfoComponent } from './studentfeeinfo.component';

describe('StudentfeeinfoComponent', () => {
  let component: StudentfeeinfoComponent;
  let fixture: ComponentFixture<StudentfeeinfoComponent>;

  beforeEach(waitForAsync(() => {
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
