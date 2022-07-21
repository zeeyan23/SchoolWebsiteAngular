import { TestBed } from '@angular/core/testing';

import { PenaltyurlService } from './penaltyurl.service';

describe('PenaltyurlService', () => {
  let service: PenaltyurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PenaltyurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
