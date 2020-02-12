import { of } from 'rxjs';

export class StudentsServiceMock {
  students$ = of([]);
  hasMoreItems$ = of(true);
  queryParams = {};
  getStudents = () => of([]);
  getStudent = () => of(null);
  createStudent = () => of(null);
  updateStudent = () => of(null);
  removeStudent = () => of(null);
}
