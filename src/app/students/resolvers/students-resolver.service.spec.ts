import { TestBed } from '@angular/core/testing';
import { QueryParams } from 'src/app/shared/models/query-params.model';

import { StudentsServiceMock } from '../../tests/students.service.mock';
import { StudentsService } from '../services/students.service';
import { StudentsResolverService } from './students-resolver.service';

describe('StudentsResolverService', () => {
  let service: StudentsResolverService;
  let studentsService: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: StudentsService, useClass: StudentsServiceMock }]
    });
    service = TestBed.inject(StudentsResolverService);
    studentsService = TestBed.inject(StudentsService);
  });

  it('should get a reseted list of students', () => {
    spyOn(studentsService, 'getStudents');
    const queryParams: Partial<QueryParams> = { resetList: true };

    service.resolve();

    expect(studentsService.getStudents).toHaveBeenCalledWith(queryParams);
  });
});
