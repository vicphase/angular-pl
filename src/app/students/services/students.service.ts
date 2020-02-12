import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { LoadingService } from '../../shared/components/loading/loading.service';
import { DEFAULT_LIMIT_SIZE } from '../../shared/constants/default-limit-size';
import { DELAY_TIME } from '../../shared/constants/delay-time';
import { QueryParams } from '../../shared/models/query-params.model';
import { HttpHelperService } from '../../shared/services/http-helper.service';
import { Student } from '../models/student.model';
import { StudentsDataService } from './students-data.service';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  students$ = this.studentsSubject.asObservable();
  private hasMoreItemsSubject = new BehaviorSubject<boolean>(false);
  hasMoreItems$ = this.hasMoreItemsSubject.asObservable();
  queryParams: Partial<QueryParams> = {};

  constructor(
    private studentsDataService: StudentsDataService,
    private loadingService: LoadingService,
    private httpHelperService: HttpHelperService
  ) {}

  getStudents(queryParams: Partial<QueryParams>): Observable<Student[]> {
    this.loadingService.show();
    this.queryParams = { ...this.queryParams, ...queryParams };
    return of(
      this.studentsDataService.getStudents(
        this.httpHelperService.buildQueryParams(this.queryParams)
      )
    ).pipe(
      delay(DELAY_TIME),
      tap(students => {
        queryParams.resetList
          ? this.studentsSubject.next(students)
          : this.studentsSubject.next(this.studentsSubject.value.concat(students));
        this.queryParams.offset = this.studentsSubject.value.length;
        this.hasMoreItemsSubject.next(students.length >= DEFAULT_LIMIT_SIZE);
        this.loadingService.hide();
      })
    );
  }

  getStudent(id: string): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.getStudent(id)).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide()),
      map(student => student)
    );
  }

  createStudent(student: Student): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.createStudent(student)).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide())
    );
  }

  updateStudent(student: Student): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.updateStudent(student)).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide())
    );
  }
}
