import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassworklistComponent } from './classworklist.component';

describe('ClassworklistComponent', () => {
  let component: ClassworklistComponent;
  let fixture: ComponentFixture<ClassworklistComponent>;

  beforeEach(async(() => {
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
