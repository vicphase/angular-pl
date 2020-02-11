import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { Student } from '../models/student.model';
import { StudentsService } from './students.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsResolverService implements Resolve<Student[]> {
  constructor(private studentsService: StudentsService) {}

  resolve(): Observable<Student[]> {
    return this.studentsService.getStudents();
  }
}
