import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookpendingComponent } from './bookpending.component';

describe('BookpendingComponent', () => {
  let component: BookpendingComponent;
  let fixture: ComponentFixture<BookpendingComponent>;

  beforeEach(async(() => {
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
