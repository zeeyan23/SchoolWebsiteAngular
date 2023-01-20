import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ShowmarksheetComponent } from './showmarksheet.component';

describe('ShowmarksheetComponent', () => {
  let component: ShowmarksheetComponent;
  let fixture: ComponentFixture<ShowmarksheetComponent>;

  beforeEach(waitForAsync(() => {
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
