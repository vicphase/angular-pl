import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { DELAY_TIME } from 'src/app/shared/constants/delay-time';

import { Student } from '../models/student.model';
import { StudentsDataService } from './students-data.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(private studentsDataService: StudentsDataService) {}

  getStudents(): Observable<Student[]> {
    return of(this.studentsDataService.students).pipe(delay(DELAY_TIME));
  }
}
