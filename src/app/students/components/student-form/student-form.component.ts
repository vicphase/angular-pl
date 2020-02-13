import { ChangeDetectionStrategy, Component, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { FormComponent } from '../../../shared/components/form/form.component';
import { TherapyTypes } from '../../enums/therapy-types.enum';
import { Student } from '../../models/student.model';

/**
 * Custom validator to send an error if a form array has two or more repeated value
 * @param formArray form array object
 * @returns object with 'uniqueValues' error
 */
function uniqueValues(formArray: FormArray): { uniqueValues: boolean } | null {
  if (hasDuplicates(formArray.value)) {
    return { uniqueValues: true };
  }
}

/**
 * Determines if an array has duplicate items
 * @param array of strings
 * @returns true if array contains two or more of the same string
 */
function hasDuplicates(array: string[]): boolean {
  return new Set(array).size !== array.length;
}

/**
 * Component to create or update a student
 */
@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StudentFormComponent extends FormComponent<Student> implements OnChanges {
  /**
   * Therapy options to display in the select of the form
   */
  therapyOptions = Object.keys(TherapyTypes).map(key => ({ value: key, label: TherapyTypes[key] }));

  /**
   * Gets therapies form array to loop the controls in the template
   */
  get therapiesFormArray(): FormArray {
    return this.form.get('therapies') as FormArray;
  }

  /**
   * Creates an instance of student form component.
   * @param fb Form builder to create oour form
   */
  constructor(private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      id: null,
      name: ['', Validators.required],
      therapies: this.fb.array([this.fb.control('', Validators.required)], {
        validators: uniqueValues
      })
    });
  }

  /**
   * If an item exists the form enters in edit mode and patches the form value
   * with the current student
   */
  ngOnChanges() {
    if (this.item) {
      this.form.patchValue(this.item);
      this.form.controls.therapies = this.fb.array([]);
      this.item.therapies.forEach(therapy =>
        this.therapiesFormArray.push(this.fb.control(therapy, Validators.required))
      );
    }
  }

  /**
   * Adds a therapy form control
   */
  addTherapy(): void {
    this.therapiesFormArray.push(this.fb.control('', Validators.required));
  }

  /**
   * Deletes a therapy form control in the array at certain index
   * @param index of the therapy to delete
   */
  deleteTherapy(index: number): void {
    this.therapiesFormArray.removeAt(index);
  }
}
