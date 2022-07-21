import { TestBed } from '@angular/core/testing';

import { RecievedurlService } from './recievedurl.service';

describe('RecievedurlService', () => {
  let service: RecievedurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecievedurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
