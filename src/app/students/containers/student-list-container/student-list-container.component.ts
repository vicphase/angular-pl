import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list-container',
  templateUrl: './student-list-container.component.html',
  styleUrls: ['./student-list-container.component.scss']
})
export class StudentListContainerComponent {
  students: Student[] = this.route.snapshot.data.resolvedStudents;
  constructor(private route: ActivatedRoute) {}
}
