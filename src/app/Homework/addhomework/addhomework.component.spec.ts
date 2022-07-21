import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhomeworkComponent } from './addhomework.component';

describe('AddhomeworkComponent', () => {
  let component: AddhomeworkComponent;
  let fixture: ComponentFixture<AddhomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
