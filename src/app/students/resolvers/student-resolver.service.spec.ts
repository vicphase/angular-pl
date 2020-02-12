import { TestBed } from '@angular/core/testing';

import { StudentsServiceMock } from '../../tests/students.service.mock';
import { StudentsService } from '../services/students.service';
import { StudentResolverService } from './student-resolver.service';

describe('StudentResolverService', () => {
  let service: StudentResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: StudentsService, useClass: StudentsServiceMock }]
    });
    service = TestBed.inject(StudentResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
