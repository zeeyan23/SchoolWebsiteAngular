import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportmapComponent } from './transportmap.component';

describe('TransportmapComponent', () => {
  let component: TransportmapComponent;
  let fixture: ComponentFixture<TransportmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
