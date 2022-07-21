import { TestBed } from '@angular/core/testing';

import { StaffurlService } from './staffurl.service';

describe('StaffurlService', () => {
  let service: StaffurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StaffurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
