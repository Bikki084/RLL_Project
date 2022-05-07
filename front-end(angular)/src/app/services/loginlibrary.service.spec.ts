import { TestBed } from '@angular/core/testing';

import { LoginlibraryService } from './loginlibrary.service';

describe('LoginlibraryService', () => {
  let service: LoginlibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginlibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
