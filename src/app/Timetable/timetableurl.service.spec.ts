import { TestBed } from '@angular/core/testing';

import { TimetableurlService } from './timetableurl.service';

describe('TimetableurlService', () => {
  let service: TimetableurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimetableurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
