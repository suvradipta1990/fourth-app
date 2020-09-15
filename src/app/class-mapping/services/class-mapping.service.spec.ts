import { TestBed } from '@angular/core/testing';

import { ClassMappingService } from './class-mapping.service';

describe('ClassMappingService', () => {
  let service: ClassMappingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassMappingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
