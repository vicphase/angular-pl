import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDetailContainerComponent } from './student-detail-container.component';

describe('StudentDetailContainerComponent', () => {
  let component: StudentDetailContainerComponent;
  let fixture: ComponentFixture<StudentDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDetailContainerComponent ]
    })
    .compileComponents();
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
