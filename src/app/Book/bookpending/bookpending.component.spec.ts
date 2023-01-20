import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BookpendingComponent } from './bookpending.component';

describe('BookpendingComponent', () => {
  let component: BookpendingComponent;
  let fixture: ComponentFixture<BookpendingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BookpendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookpendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
