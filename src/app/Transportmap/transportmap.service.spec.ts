import { TestBed } from '@angular/core/testing';

import { TransportmapService } from './transportmap.service';

describe('TransportmapService', () => {
  let service: TransportmapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransportmapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
