import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SendnotificationComponent } from './sendnotification.component';

describe('SendnotificationComponent', () => {
  let component: SendnotificationComponent;
  let fixture: ComponentFixture<SendnotificationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SendnotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendnotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
