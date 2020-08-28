import { TestBed } from '@angular/core/testing';

import { GetAudRegListService } from './get-aud-reg-list.service';

describe('GetAudRegListService', () => {
  let service: GetAudRegListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAudRegListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
