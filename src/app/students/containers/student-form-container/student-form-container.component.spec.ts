import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';

import { MatSnackBarMock } from '../../../tests/mat-snack-bar.mock';
import { StudentsServiceMock } from '../../../tests/students.service.mock';
import { Student } from '../../models/student.model';
import { StudentsService } from '../../services/students.service';
import { StudentFormContainerComponent } from './student-form-container.component';

describe('StudentFormContainerComponent', () => {
  let component: StudentFormContainerComponent;
  let fixture: ComponentFixture<StudentFormContainerComponent>;
  let studentsService: StudentsService;
  let matSnackBar: MatSnackBar;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [StudentFormContainerComponent],
      providers: [
        { provide: StudentsService, useClass: StudentsServiceMock },
        { provide: MatSnackBar, useClass: MatSnackBarMock }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    studentsService = TestBed.inject(StudentsService);
    matSnackBar = TestBed.inject(MatSnackBar);
    router = TestBed.inject(Router);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create a student', () => {
    spyOn(studentsService, 'createStudent').and.returnValue(of(null));
    spyOn(router, 'navigate');
    spyOn(matSnackBar, 'open');
    const student: Student = { name: 'test', therapies: [] };

    component.submit(student);

    expect(studentsService.createStudent).toHaveBeenCalledWith(student);
    expect(router.navigate).toHaveBeenCalledWith(['..']);
    expect(matSnackBar.open).toHaveBeenCalledWith('The student has been saved', 'Ok', {
      duration: 2000
    });
  });

  it('should update a student', () => {
    spyOn(studentsService, 'updateStudent').and.returnValue(of(null));
    spyOn(router, 'navigate');
    spyOn(matSnackBar, 'open');
    const student: Student = { id: '1', name: 'test', therapies: [] };

    component.submit(student);

    expect(studentsService.updateStudent).toHaveBeenCalledWith(student);
    expect(router.navigate).toHaveBeenCalledWith(['..']);
    expect(matSnackBar.open).toHaveBeenCalledWith('The student has been saved', 'Ok', {
      duration: 2000
    });
  });
});
