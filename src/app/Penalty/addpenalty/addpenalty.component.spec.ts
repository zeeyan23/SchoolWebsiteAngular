import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpenaltyComponent } from './addpenalty.component';

describe('AddpenaltyComponent', () => {
  let component: AddpenaltyComponent;
  let fixture: ComponentFixture<AddpenaltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpenaltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpenaltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
