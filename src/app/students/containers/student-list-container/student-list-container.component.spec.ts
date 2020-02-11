import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListContainerComponent } from './student-list-container.component';

describe('StudentListContainerComponent', () => {
  let component: StudentListContainerComponent;
  let fixture: ComponentFixture<StudentListContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentListContainerComponent ]
    })
    .compileComponents();
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
