import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcalenderComponent } from './listcalender.component';

describe('ListcalenderComponent', () => {
  let component: ListcalenderComponent;
  let fixture: ComponentFixture<ListcalenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcalenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcalenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
