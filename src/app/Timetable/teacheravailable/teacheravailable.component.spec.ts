import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheravailableComponent } from './teacheravailable.component';

describe('TeacheravailableComponent', () => {
  let component: TeacheravailableComponent;
  let fixture: ComponentFixture<TeacheravailableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacheravailableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheravailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
