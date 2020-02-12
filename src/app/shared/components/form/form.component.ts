import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent<T = any> {
  @Input() form: FormGroup;
  @Input() item: Partial<T>;
  @Output() formSubmit = new EventEmitter<T>();

  get values(): T {
    return this.form.getRawValue() as T;
  }

  submit(): void {
    this.form.valid || this.form.disabled
      ? this.formSubmit.emit(this.values)
      : this.form.markAllAsTouched();
  }
}
