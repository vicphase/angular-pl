import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentListContainerComponent } from './containers/student-list-container/student-list-container.component';


@NgModule({
  declarations: [StudentListComponent, StudentListContainerComponent],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
