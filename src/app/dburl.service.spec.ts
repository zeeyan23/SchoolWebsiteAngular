import { TestBed } from '@angular/core/testing';

import { DburlService } from './dburl.service';

describe('DburlService', () => {
  let service: DburlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DburlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
