import { TestBed } from '@angular/core/testing';

import { SalaryurlService } from './salaryurl.service';

describe('SalaryurlService', () => {
  let service: SalaryurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalaryurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
