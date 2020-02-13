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

/**
 * Service used to communicate with the backend
 * and store the collection here
 */
@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  /**
   * Subject that contains the collection of students
   */
  private studentsSubject = new BehaviorSubject<Student[]>([]);
  /**
   * Observable with the student collection
   */
  students$ = this.studentsSubject.asObservable();
  /**
   * Subject with a boolean value. True students are missing of loading
   */
  private hasMoreItemsSubject = new BehaviorSubject<boolean>(false);
  /**
   * Observable with a boolean value. False if all students are loaded
   */
  hasMoreItems$ = this.hasMoreItemsSubject.asObservable();
  /**
   * Saves the query params in the service to support sorting, searching,
   * and lazy loading at the same time
   */
  queryParams: Partial<QueryParams> = {};

  /**
   * Creates an instance of students service.
   * @param studentsDataService (Backend)
   * @param loadingService to change the loading state of the application
   * @param httpHelperService to build our query params before sending them to backend
   */
  constructor(
    private studentsDataService: StudentsDataService,
    private loadingService: LoadingService,
    private httpHelperService: HttpHelperService
  ) {}

  /**
   * Gets students
   * @param queryParams params used to filter, sort, and lazy load items
   * @returns students list by backend
   */
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

  /**
   * Gets a single student
   * @param id of the student we want to retreive
   * @returns student from backend
   */
  getStudent(id: string): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.getStudent(id)).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide()),
      map(student => student)
    );
  }

  /**
   * Creates student
   * @param student obtained from the student form
   * @returns student created in backend
   */
  createStudent(student: Student): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.createStudent(student)).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide())
    );
  }

  /**
   * Updates student
   * @param student obtained from the student form
   * @returns student updated in backend
   */
  updateStudent(student: Student): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.updateStudent(student)).pipe(
      delay(DELAY_TIME),
      tap(() => this.loadingService.hide())
    );
  }

  /**
   * Removes student
   * @param id of student we want to delete
   * @returns student deleted from backend
   */
  removeStudent(id: string): Observable<Student> {
    this.loadingService.show();
    return of(this.studentsDataService.deleteStudent(id)).pipe(
      delay(DELAY_TIME),
      tap(removedStudent => {
        this.studentsSubject.next(
          this.studentsSubject.value.filter(student => student.id !== removedStudent.id)
        );
        this.loadingService.hide();
      })
    );
  }
}
