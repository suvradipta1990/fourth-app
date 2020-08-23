import { TestBed } from '@angular/core/testing';

import { AddhistoryService } from './addhistory.service';

describe('AddhistoryService', () => {
  let service: AddhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
