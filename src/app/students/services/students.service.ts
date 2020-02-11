import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/components/loading/loading.service';

import { DELAY_TIME } from '../../shared/constants/delay-time';
import { Student } from '../models/student.model';
import { StudentsDataService } from './students-data.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  constructor(
    private studentsDataService: StudentsDataService,
    private loadingService: LoadingService
  ) {}

  getStudents(): Observable<Student[]> {
    this.loadingService.show();
    return of(this.studentsDataService.students).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide())
    );
  }
}
