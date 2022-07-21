import { TestBed } from '@angular/core/testing';

import { InstituteurlService } from './instituteurl.service';

describe('InstituteurlService', () => {
  let service: InstituteurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InstituteurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
