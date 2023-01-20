import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ClassworklistComponent } from './classworklist.component';

describe('ClassworklistComponent', () => {
  let component: ClassworklistComponent;
  let fixture: ComponentFixture<ClassworklistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
