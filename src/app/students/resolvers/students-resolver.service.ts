import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { QueryParams } from '../../shared/models/query-params.model';
import { Student } from '../models/student.model';
import { StudentsService } from '../services/students.service';

/**
 * Resolved used by the student list container component
 */
@Injectable({
  providedIn: 'root'
})
export class StudentsResolverService implements Resolve<Observable<Student[]>> {
  /**
   * Creates an instance of students resolver service.
   * @param studentsService to retreive the list of students from API
   */
  constructor(private studentsService: StudentsService) {}

  /**
   * Resolves students resolver service
   * @returns resolved student list
   */
  resolve(): Observable<Student[]> {
    const queryParams: Partial<QueryParams> = { resetList: true };
    return this.studentsService.getStudents(queryParams);
  }
}
