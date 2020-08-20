import { TestBed } from '@angular/core/testing';

import { ApproveregService } from './approvereg.service';

describe('ApproveregService', () => {
  let service: ApproveregService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproveregService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
