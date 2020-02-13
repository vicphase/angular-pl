import { Component, Inject, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

/**
 * Component used to prompt the user a yes/no answer
 */
@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConfirmDialogComponent {
  /**
   * Creates an instance of confirm dialog component.
   * @param data object with a message to display in the dialog body
   */
  constructor(@Inject(MAT_DIALOG_DATA) public data: { message: string }) {}
}
