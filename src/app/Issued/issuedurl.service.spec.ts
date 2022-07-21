import { TestBed } from '@angular/core/testing';

import { IssuedurlService } from './issuedurl.service';

describe('IssuedurlService', () => {
  let service: IssuedurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IssuedurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
