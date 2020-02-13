import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from '../models/student.model';
import { StudentsService } from '../services/students.service';

/**
 * Resolver used by the student form container component in edit mode
 */
@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<Observable<Student>> {
  /**
   * Creates an instance of student resolver service.
   * @param studentsService used to retreive a single user from API
   */
  constructor(private studentsService: StudentsService) {}

  /**
   * Resolves student data
   * @param route to retreive the user id from the url
   * @returns resolved student data
   */
  resolve(route: ActivatedRouteSnapshot): Observable<Student> {
    const id = route.paramMap.get('id');
    return this.studentsService.getStudent(id);
  }
}
