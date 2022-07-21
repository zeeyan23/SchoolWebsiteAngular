import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroquizComponent } from './introquiz.component';

describe('IntroquizComponent', () => {
  let component: IntroquizComponent;
  let fixture: ComponentFixture<IntroquizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroquizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroquizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
