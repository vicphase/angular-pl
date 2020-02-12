import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap, take } from 'rxjs/operators';

import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { LoadingService } from '../../../shared/components/loading/loading.service';
import { QueryParams } from '../../../shared/models/query-params.model';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import { StudentDetailContainerComponent } from '../student-detail-container/student-detail-container.component';

@Component({
  selector: 'app-student-list-container',
  templateUrl: './student-list-container.component.html',
  styleUrls: ['./student-list-container.component.scss']
})
export class StudentListContainerComponent {
  students$ = this.studentsService.students$;
  loading$ = this.loadingService.loading$;
  hasMoreItems$ = this.studentsService.hasMoreItems$;
  constructor(
    private studentsService: StudentsService,
    private loadingService: LoadingService,
    private matDialog: MatDialog
  ) {}

  getMoreItems(): void {
    const queryParams: Partial<QueryParams> = { resetList: false };
    this.studentsService
      .getStudents(queryParams)
      .pipe(take(1))
      .subscribe();
  }

  filterItems(queryParams: QueryParams): void {
    const newQueryParams: Partial<QueryParams> = { ...queryParams, resetList: true };
    this.studentsService
      .getStudents(newQueryParams)
      .pipe(take(1))
      .subscribe();
  }

  viewDetail(student: Student): void {
    this.matDialog.open(StudentDetailContainerComponent, { data: { student } });
  }

  deleteItem(student: Student): void {
    const message = `Are you sure you want to delete student ${student.name}?`;
    const dialogRef = this.matDialog.open(ConfirmDialogComponent, { data: { message } });

    dialogRef
      .afterClosed()
      .pipe(
        filter(value => value),
        switchMap(() => this.studentsService.removeStudent(student.id)),
        take(1)
      )
      .subscribe();
  }
}
