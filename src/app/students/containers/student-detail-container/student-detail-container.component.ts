import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Student } from '../../models/student.model';

/**
 * Component containing the data to display a student in a dialog
 */
@Component({
  selector: 'app-student-detail-container',
  templateUrl: './student-detail-container.component.html',
  styleUrls: ['./student-detail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentDetailContainerComponent {
  /**
   * Creates an instance of student detail container component.
   * @param data containing the student that will be displayed
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: { student: Student }) {}
}
