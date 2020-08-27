import { TestBed } from '@angular/core/testing';

import { UpcommingAuditionsService } from './upcomming-auditions.service';

describe('UpcommingAuditionsService', () => {
  let service: UpcommingAuditionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpcommingAuditionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
