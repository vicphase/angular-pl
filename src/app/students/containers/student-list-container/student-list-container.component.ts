import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap, take } from 'rxjs/operators';

import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { LoadingService } from '../../../shared/components/loading/loading.service';
import { QueryParams } from '../../../shared/models/query-params.model';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import { StudentDetailContainerComponent } from '../student-detail-container/student-detail-container.component';

/**
 * Component that contains the data to display the student collection
 */
@Component({
  selector: 'app-student-list-container',
  templateUrl: './student-list-container.component.html',
  styleUrls: ['./student-list-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListContainerComponent {
  /**
   *  Collection of students
   */
  students$ = this.studentsService.students$;
  /**
   * Observable to know the loading state of the app
   */
  loading$ = this.loadingService.loading$;
  /**
   * True if the collection is not entirely loadad in the list
   */
  hasMoreItems$ = this.studentsService.hasMoreItems$;
  /**
   * Creates an instance of student list container component.
   * @param studentsService to communicate with the API
   * @param loadingService to know the loading state of the app
   * @param matDialog to prompt a confirm dialog when deleting student from collection
   */
  constructor(
    private studentsService: StudentsService,
    private loadingService: LoadingService,
    private matDialog: MatDialog
  ) {}

  /**
   * Gets more students for our list
   */
  getMoreItems(): void {
    const queryParams: Partial<QueryParams> = { resetList: false };
    this.studentsService
      .getStudents(queryParams)
      .pipe(take(1))
      .subscribe();
  }

  /**
   * Filters students and refreshes the list
   * @param queryParams that will be sent to the API
   */
  filterItems(queryParams: QueryParams): void {
    const newQueryParams: Partial<QueryParams> = { ...queryParams, resetList: true };
    this.studentsService
      .getStudents(newQueryParams)
      .pipe(take(1))
      .subscribe();
  }

  /**
   * Opens a dialog that contains the information of the student
   * @param student that will be displayed
   */
  viewDetail(student: Student): void {
    this.matDialog.open(StudentDetailContainerComponent, { data: { student } });
  }

  /**
   * Prompts a confirm dialog, if the user accepts the delete service is called
   * @param student entity that will be deleted
   */
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
