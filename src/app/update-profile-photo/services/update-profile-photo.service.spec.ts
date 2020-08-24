import { TestBed } from '@angular/core/testing';

import { UpdateProfilePhotoService } from './update-profile-photo.service';

describe('UpdateProfilePhotoService', () => {
  let service: UpdateProfilePhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateProfilePhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
