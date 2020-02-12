import { TestBed } from '@angular/core/testing';

import { StudentsResolverService } from './students-resolver.service';

describe('StudentsResolverService', () => {
  let service: StudentsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
