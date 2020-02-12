import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayToStringPipe } from '../../../shared/pipes/array-to-string.pipe';
import { StudentListComponent } from './student-list.component';

describe('StudentListComponent', () => {
  let component: StudentListComponent;
  let fixture: ComponentFixture<StudentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListComponent, ArrayToStringPipe],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
