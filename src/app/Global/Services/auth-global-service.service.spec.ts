import { TestBed } from '@angular/core/testing';

import { AuthGlobalServiceService } from './auth-global-service.service';

describe('AuthGlobalServiceService', () => {
  let service: AuthGlobalServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthGlobalServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
