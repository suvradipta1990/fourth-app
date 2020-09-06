import { TestBed } from '@angular/core/testing';

import { StudentPaymentHistoryService } from './student-payment-history.service';

describe('StudentPaymentHistoryService', () => {
  let service: StudentPaymentHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentPaymentHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
