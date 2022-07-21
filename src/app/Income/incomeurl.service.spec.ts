import { TestBed } from '@angular/core/testing';

import { IncomeurlService } from './incomeurl.service';

describe('IncomeurlService', () => {
  let service: IncomeurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
