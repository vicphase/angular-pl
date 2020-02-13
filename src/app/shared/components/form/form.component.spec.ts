import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should submit the form if valid', () => {
    spyOn(component.formSubmit, 'emit');
    component.form = new FormGroup({ test: new FormControl('', [Validators.required]) });
    component.form.get('test').patchValue('test');

    component.submit();

    expect(component.formSubmit.emit).toHaveBeenCalled();
  });

  it('should submit the form if disabled', () => {
    spyOn(component.formSubmit, 'emit');
    component.form = new FormGroup({ test: new FormControl('', [Validators.required]) });
    component.form.disable();

    component.submit();

    expect(component.formSubmit.emit).toHaveBeenCalled();
  });

  it('should mark the form as touched if the form is not valid', () => {
    component.form = new FormGroup({ test: new FormControl('', [Validators.required]) });
    spyOn(component.form, 'markAllAsTouched');

    component.submit();

    expect(component.form.markAllAsTouched).toHaveBeenCalled();
  });
});
