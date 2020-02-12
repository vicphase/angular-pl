import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';

import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-form-container',
  templateUrl: './student-form-container.component.html',
  styleUrls: ['./student-form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFormContainerComponent implements OnInit {
  currentItem: Student;
  constructor(
    private studentsService: StudentsService,
    private router: Router,
    private matSnackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.currentItem = this.route.snapshot.data.resolvedStudent;
  }

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
