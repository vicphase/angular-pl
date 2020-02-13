import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentFormContainerComponent } from './containers/student-form-container/student-form-container.component';
import { StudentListContainerComponent } from './containers/student-list-container/student-list-container.component';
import { StudentResolverService } from './resolvers/student-resolver.service';
import { StudentsResolverService } from './resolvers/students-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: StudentListContainerComponent,
    resolve: { resolvedStudents: StudentsResolverService }
  },
  {
    path: 'new',
    component: StudentFormContainerComponent
  },
  {
    path: ':id',
    component: StudentFormContainerComponent,
    resolve: { resolvedStudent: StudentResolverService }
  }
];

/**
 * Module containing the routes of our students module
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule {}
