import { TestBed } from '@angular/core/testing';

import { StudentsServiceMock } from '../../tests/students.service.mock';
import { StudentsService } from '../services/students.service';
import { StudentsResolverService } from './students-resolver.service';

describe('StudentsResolverService', () => {
  let service: StudentsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: StudentsService, useClass: StudentsServiceMock }]
    });
    service = TestBed.inject(StudentsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
