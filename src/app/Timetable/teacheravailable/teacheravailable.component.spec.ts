import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TeacheravailableComponent } from './teacheravailable.component';

describe('TeacheravailableComponent', () => {
  let component: TeacheravailableComponent;
  let fixture: ComponentFixture<TeacheravailableComponent>;

  beforeEach(waitForAsync(() => {
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
