import { TestBed } from '@angular/core/testing';

import { StudenturlService } from './studenturl.service';

describe('StudenturlService', () => {
  let service: StudenturlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudenturlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
