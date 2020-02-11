import { Component } from '@angular/core';
import { take } from 'rxjs/operators';

import { LoadingService } from '../../../shared/components/loading/loading.service';
import { QueryParams } from '../../../shared/models/query-params.model';
import { StudentsService } from '../../services/students.service';

@Component({
  selector: 'app-student-list-container',
  templateUrl: './student-list-container.component.html',
  styleUrls: ['./student-list-container.component.scss']
})
export class StudentListContainerComponent {
  students$ = this.studentsService.students$;
  loading$ = this.loadingService.loading$;
  hasMoreItems$ = this.studentsService.hasMoreItems$;
  constructor(private studentsService: StudentsService, private loadingService: LoadingService) {}

  getMoreItems(): void {
    const queryParams: Partial<QueryParams> = { resetList: false };
    this.studentsService
      .getStudents(queryParams)
      .pipe(take(1))
      .subscribe();
  }
}
