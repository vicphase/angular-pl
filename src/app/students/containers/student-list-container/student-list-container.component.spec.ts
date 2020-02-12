import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';

import { LoadingService } from '../../../shared/components/loading/loading.service';
import { LoadingServiceMock } from '../../../tests/loading.service.mock';
import { MatDialogMock } from '../../../tests/mat-dialog.mock';
import { StudentsServiceMock } from '../../../tests/students.service.mock';
import { StudentsService } from '../../services/students.service';
import { StudentListContainerComponent } from './student-list-container.component';

describe('StudentListContainerComponent', () => {
  let component: StudentListContainerComponent;
  let fixture: ComponentFixture<StudentListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListContainerComponent],
      providers: [
        { provide: StudentsService, useClass: StudentsServiceMock },
        { provide: LoadingService, useClass: LoadingServiceMock },
        { provide: MatDialog, useClass: MatDialogMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
