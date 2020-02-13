import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

/**
 * Component containing the data to create or update a student entity
 */
@Component({
  selector: 'app-student-form-container',
  templateUrl: './student-form-container.component.html',
  styleUrls: ['./student-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFormContainerComponent implements OnInit {
  /**
   * Remains undefined if the form is in create mode
   */
  currentItem: Student;
  /**
   * Creates an instance of student form container component.
   * @param studentsService service to perform create/update operations in the student collection
   * @param router to return to the list when finishing operation
   * @param matSnackBar displays a message when changes are saved in the API
   * @param route used to retreive the current student to edit
   */
  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  /**
   * Assigns the student if the form is in edit mode
   */
  ngOnInit(): void {
    this.currentItem = this.route.snapshot.data.resolvedStudent;
  }

  /**
   * Submits the student data, if the user has an id the user already exists in database
   * and we perform an update, if not we perform a create operation
   * @param student that comes from the student form component
   */
  submit(student: Student): void {
    const method = student.id
      ? this.studentsService.updateStudent(student)
      : this.studentsService.createStudent(student);
    method.pipe(take(1)).subscribe(() => {
      this.router.navigate(['..']);
      this.matSnackBar.open('The student has been saved', 'Ok', { duration: 2000 });
    });
  }
}
