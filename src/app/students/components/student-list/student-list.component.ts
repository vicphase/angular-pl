import { Component } from '@angular/core';
import { ListComponent } from 'src/app/shared/components/list/list.component';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent extends ListComponent<Student> {}
