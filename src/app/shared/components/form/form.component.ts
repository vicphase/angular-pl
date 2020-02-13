import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

/**
 * Component to be extended by other components that have form behavior
 */
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormComponent<T = any> {
  /**
   * The Reactive Form our component will be working
   */
  @Input() form: FormGroup;
  /**
   * Data used if the form is in edit mode (the form is editing the item)
   */
  @Input() item: Partial<T>;
  /**
   * Event that will propagate when our form is valid for submit with the data of the form
   */
  @Output() formSubmit = new EventEmitter<T>();

  /**
   * Value of the form
   */
  get values(): T {
    return this.form.getRawValue() as T;
  }

  /**
   * When the form is not valid is mark as touched to display al error mesaages
   * When the form is valid the component emits an event with the value of the form
   */
  submit(): void {
    this.form.valid || this.form.disabled
      ? this.formSubmit.emit(this.values)
      : this.form.markAllAsTouched();
  }
}
