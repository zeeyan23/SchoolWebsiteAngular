import { TestBed } from '@angular/core/testing';

import { ExamurlService } from './examurl.service';

describe('ExamurlService', () => {
  let service: ExamurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
