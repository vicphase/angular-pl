import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { of } from 'rxjs';

import { ConfirmDialogComponent } from '../../../shared/components/confirm-dialog/confirm-dialog.component';
import { LoadingService } from '../../../shared/components/loading/loading.service';
import { QueryParams } from '../../../shared/models/query-params.model';
import { LoadingServiceMock } from '../../../tests/loading.service.mock';
import { MatDialogMock } from '../../../tests/mat-dialog.mock';
import { StudentsServiceMock } from '../../../tests/students.service.mock';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import { StudentDetailContainerComponent } from '../student-detail-container/student-detail-container.component';
import { StudentListContainerComponent } from './student-list-container.component';

describe('StudentListContainerComponent', () => {
  let component: StudentListContainerComponent;
  let fixture: ComponentFixture<StudentListContainerComponent>;
  let studentsService: StudentsService;
  let matDialog: MatDialog;

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
    studentsService = TestBed.inject(StudentsService);
    matDialog = TestBed.inject(MatDialog);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should get more items', () => {
    spyOn(studentsService, 'getStudents').and.returnValue(of([]));
    const queryParams: Partial<QueryParams> = { resetList: false };

    component.getMoreItems();

    expect(studentsService.getStudents).toHaveBeenCalledWith(queryParams);
  });

  it('should filter the items', () => {
    spyOn(studentsService, 'getStudents').and.returnValue(of([]));
    const queryParams: Partial<QueryParams> = { resetList: true };

    component.filterItems(null);

    expect(studentsService.getStudents).toHaveBeenCalledWith(queryParams);
  });

  it('should open the dialog with the student details', () => {
    spyOn(matDialog, 'open');
    const student: Student = {
      name: 'test',
      therapies: []
    };

    component.viewDetail(student);

    expect(matDialog.open).toHaveBeenCalledWith(StudentDetailContainerComponent, {
      data: { student }
    });
  });

  it('should delete the item', () => {
    const student: Student = {
      id: '1',
      name: 'test',
      therapies: []
    };
    const message = `Are you sure you want to delete student ${student.name}?`;
    spyOn(matDialog, 'open').and.returnValue({
      afterClosed: () => of(true),
      close: () => {}
    } as any);
    spyOn(studentsService, 'removeStudent').and.returnValue(of(student));

    component.deleteItem(student);

    expect(matDialog.open).toHaveBeenCalledWith(ConfirmDialogComponent, { data: { message } });
    expect(studentsService.removeStudent).toHaveBeenCalledWith(student.id);
  });
});
