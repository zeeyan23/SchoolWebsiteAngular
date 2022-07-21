import { TestBed } from '@angular/core/testing';

import { QuizurlService } from './quizurl.service';

describe('QuizurlService', () => {
  let service: QuizurlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizurlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
