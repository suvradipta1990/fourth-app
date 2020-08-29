import { TestBed } from '@angular/core/testing';

import { ViewRegFormService } from './view-reg-form.service';

describe('ViewRegFormService', () => {
  let service: ViewRegFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewRegFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
