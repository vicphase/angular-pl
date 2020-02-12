import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { StudentDetailContainerComponent } from './student-detail-container.component';

describe('StudentDetailContainerComponent', () => {
  let component: StudentDetailContainerComponent;
  let fixture: ComponentFixture<StudentDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDetailContainerComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
