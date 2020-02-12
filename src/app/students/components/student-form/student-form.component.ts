import { Component, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';

import { FormComponent } from '../../../shared/components/form/form.component';
import { TherapyTypes } from '../../../therapies/enums/therapy-types.enum';
import { Student } from '../../models/student.model';

function uniqueValues(formArray: FormArray): { uniqueValues: boolean } | null {
  if (hasDuplicates(formArray.value)) {
    return { uniqueValues: true };
  }
}

function hasDuplicates(array: any[]): boolean {
  return new Set(array).size !== array.length;
}

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent extends FormComponent<Student> implements OnChanges {
  therapyOptions = Object.keys(TherapyTypes).map(key => ({ value: key, label: TherapyTypes[key] }));

  get therapiesFormArray(): FormArray {
    return this.form.get('therapies') as FormArray;
  }

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

  ngOnChanges() {
    if (this.item) {
      this.form.patchValue(this.item);
      this.form.controls.therapies = this.fb.array([]);
      this.item.therapies.forEach(therapy =>
        this.therapiesFormArray.push(this.fb.control(therapy, Validators.required))
      );
    }
  }

  addTherapy(): void {
    this.therapiesFormArray.push(this.fb.control('', Validators.required));
  }

  deleteTherapy(index: number): void {
    this.therapiesFormArray.removeAt(index);
  }
}
