import { TestBed } from '@angular/core/testing';

import { PreAuditionRegistrationService } from './pre-audition-registration.service';

describe('PreAuditionRegistrationService', () => {
  let service: PreAuditionRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreAuditionRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
