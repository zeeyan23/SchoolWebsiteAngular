import { TestBed } from '@angular/core/testing';

import { RooturlService } from './rooturl.service';

describe('RooturlService', () => {
  let service: RooturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RooturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
