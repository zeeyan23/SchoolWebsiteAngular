import { TestBed } from '@angular/core/testing';

import { ExpenseurlService } from './expenseurl.service';

describe('ExpenseurlService', () => {
  let service: ExpenseurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenseurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
