import { TestBed } from '@angular/core/testing';

import { CalenderurlService } from './calenderurl.service';

describe('CalenderurlService', () => {
  let service: CalenderurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalenderurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
