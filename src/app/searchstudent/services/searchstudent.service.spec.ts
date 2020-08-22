import { TestBed } from '@angular/core/testing';

import { SearchstudentService } from './searchstudent.service';

describe('SearchstudentService', () => {
  let service: SearchstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
