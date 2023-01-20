import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeworklistComponent } from './homeworklist.component';

describe('HomeworklistComponent', () => {
  let component: HomeworklistComponent;
  let fixture: ComponentFixture<HomeworklistComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeworklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeworklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
