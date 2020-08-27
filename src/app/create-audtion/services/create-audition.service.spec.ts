import { TestBed } from '@angular/core/testing';

import { CreateAuditionService } from './create-audition.service';

describe('CreateAuditionService', () => {
  let service: CreateAuditionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateAuditionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
