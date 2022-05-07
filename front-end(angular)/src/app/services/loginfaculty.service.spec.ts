import { TestBed } from '@angular/core/testing';

import { LoginfacultyService } from './loginfaculty.service';

describe('LoginfacultyService', () => {
  let service: LoginfacultyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginfacultyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
