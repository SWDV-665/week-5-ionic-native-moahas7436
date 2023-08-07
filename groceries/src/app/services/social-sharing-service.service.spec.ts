import { TestBed } from '@angular/core/testing';

import { SocialSharingService } from './social-sharing-service.service';

describe('SocialSharingServiceService', () => {
  let service: SocialSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
