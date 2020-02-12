import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentFormContainerComponent } from './student-form-container.component';

describe('StudentFormContainerComponent', () => {
  let component: StudentFormContainerComponent;
  let fixture: ComponentFixture<StudentFormContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentFormContainerComponent ]
    })
    .compileComponents();
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
