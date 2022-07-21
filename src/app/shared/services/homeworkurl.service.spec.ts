import { TestBed } from '@angular/core/testing';

import { HomeworkurlService } from './homeworkurl.service';

describe('HomeworkurlService', () => {
  let service: HomeworkurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HomeworkurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
