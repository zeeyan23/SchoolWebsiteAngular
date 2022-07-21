import { TestBed } from '@angular/core/testing';

import { LeaveurlService } from './leaveurl.service';

describe('LeaveurlService', () => {
  let service: LeaveurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
