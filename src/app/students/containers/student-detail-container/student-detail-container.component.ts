import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-detail-container',
  templateUrl: './student-detail-container.component.html',
  styleUrls: ['./student-detail-container.component.scss']
})
export class StudentDetailContainerComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { student: Student }) {}
}
