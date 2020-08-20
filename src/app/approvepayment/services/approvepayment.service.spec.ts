import { TestBed } from '@angular/core/testing';

import { ApprovepaymentService } from './approvepayment.service';

describe('ApprovepaymentService', () => {
  let service: ApprovepaymentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprovepaymentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
