import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecievedlistComponent } from './recievedlist.component';

describe('RecievedlistComponent', () => {
  let component: RecievedlistComponent;
  let fixture: ComponentFixture<RecievedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecievedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecievedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
