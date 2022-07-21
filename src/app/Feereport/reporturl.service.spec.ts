import { TestBed } from '@angular/core/testing';

import { ReporturlService } from './reporturl.service';

describe('ReporturlService', () => {
  let service: ReporturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReporturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
