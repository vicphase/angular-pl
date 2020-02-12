import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentFormContainerComponent } from './containers/student-form-container/student-form-container.component';
import { StudentListContainerComponent } from './containers/student-list-container/student-list-container.component';
import { StudentsResolverService } from './services/students-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: StudentListContainerComponent,
    resolve: { resolvedStudents: StudentsResolverService }
  },
  {
    path: 'new',
    component: StudentFormContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
