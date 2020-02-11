import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentListContainerComponent } from './containers/student-list-container/student-list-container.component';
import { StudentsRoutingModule } from './students-routing.module';

@NgModule({
  declarations: [StudentListComponent, StudentListContainerComponent],
  imports: [CommonModule, StudentsRoutingModule, SharedModule]
})
export class StudentsModule {}
