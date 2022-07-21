import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowmarksheetComponent } from './showmarksheet.component';

describe('ShowmarksheetComponent', () => {
  let component: ShowmarksheetComponent;
  let fixture: ComponentFixture<ShowmarksheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowmarksheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowmarksheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
