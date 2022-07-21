import { TestBed } from '@angular/core/testing';

import { NotifyurlService } from './notifyurl.service';

describe('NotifyurlService', () => {
  let service: NotifyurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifyurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
