import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { QueryParams } from '../../shared/models/query-params.model';
import { Student } from '../models/student.model';
import { StudentsService } from '../services/students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsResolverService implements Resolve<Observable<Student[]>> {
  constructor(private studentsService: StudentsService) {}

  resolve(): Observable<Student[]> {
    const queryParams: Partial<QueryParams> = { resetList: true };
    return this.studentsService.getStudents(queryParams);
  }
}
