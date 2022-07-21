import { TestBed } from '@angular/core/testing';

import { TransreporturlService } from './transreporturl.service';

describe('TransreporturlService', () => {
  let service: TransreporturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransreporturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
