import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ListexamComponent } from './listexam.component';

describe('ListexamComponent', () => {
  let component: ListexamComponent;
  let fixture: ComponentFixture<ListexamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListexamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
