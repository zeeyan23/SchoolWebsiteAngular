import { TestBed } from '@angular/core/testing';

import { FeeurlService } from './feeurl.service';

describe('FeeurlService', () => {
  let service: FeeurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeeurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
