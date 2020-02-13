import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Student } from '../../models/student.model';

/**
 * Component that displays the student information in a dialog
 */
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentDetailComponent {
  /**
   * Property with the student data that will be displayed
   */
  @Input() student: Student;
}
