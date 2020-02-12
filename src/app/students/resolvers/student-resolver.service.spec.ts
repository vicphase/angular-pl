import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';

import { StudentsServiceMock } from '../../tests/students.service.mock';
import { StudentsService } from '../services/students.service';
import { StudentResolverService } from './student-resolver.service';

describe('StudentResolverService', () => {
  let service: StudentResolverService;
  let route: ActivatedRouteSnapshot;
  let studentsService: StudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: StudentsService, useClass: StudentsServiceMock }]
    });
    service = TestBed.inject(StudentResolverService);
    route = new ActivatedRouteSnapshot();
    studentsService = TestBed.inject(StudentsService);
  });

  it('should get a single student with the route id', () => {
    spyOn(studentsService, 'getStudent');
    route.params = { id: '1' };

    service.resolve(route);

    expect(studentsService.getStudent).toHaveBeenCalledWith(route.params.id);
  });
});
