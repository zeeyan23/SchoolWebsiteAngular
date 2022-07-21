import { TestBed } from '@angular/core/testing';

import { SocketserveService } from './socketserve.service';

describe('SocketserveService', () => {
  let service: SocketserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocketserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
