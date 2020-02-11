import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentListContainerComponent } from './containers/student-list-container/student-list-container.component';


const routes: Routes = [
  {
    path: '',
    component: StudentListContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
