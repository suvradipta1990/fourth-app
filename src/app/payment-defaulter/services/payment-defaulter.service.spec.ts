import { TestBed } from '@angular/core/testing';

import { PaymentDefaulterService } from './payment-defaulter.service';

describe('PaymentDefaulterService', () => {
  let service: PaymentDefaulterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDefaulterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
