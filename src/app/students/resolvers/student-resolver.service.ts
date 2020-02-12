import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from '../models/student.model';
import { StudentsService } from '../services/students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentResolverService implements Resolve<Observable<Student>> {
  constructor(private studentsService: StudentsService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Student> {
    const id = route.paramMap.get('id');
    return this.studentsService.getStudent(id);
  }
}
