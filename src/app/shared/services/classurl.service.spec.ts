import { TestBed } from '@angular/core/testing';

import { ClassurlService } from './classurl.service';

describe('ClassurlService', () => {
  let service: ClassurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
