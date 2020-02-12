import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { MatSnackBarMock } from 'src/app/tests/mat-snack-bar.mock';

import { StudentsServiceMock } from '../../../tests/students.service.mock';
import { StudentsService } from '../../services/students.service';
import { StudentFormContainerComponent } from './student-form-container.component';

describe('StudentFormContainerComponent', () => {
  let component: StudentFormContainerComponent;
  let fixture: ComponentFixture<StudentFormContainerComponent>;

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
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
