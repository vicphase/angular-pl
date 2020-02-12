import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';

import { ListComponent } from '../../../shared/components/list/list.component';
import { Student } from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentListComponent extends ListComponent<Student> {
  @ViewChild(CdkVirtualScrollViewport) viewport: CdkVirtualScrollViewport;
}
