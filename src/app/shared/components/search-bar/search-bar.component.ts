import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

/**
 * Component used by lists to search for items
 */
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, OnDestroy {
  /**
   * Event emitted when the value in the search bar changes
   */
  @Output() valueChange = new EventEmitter<string>();
  /**
   * Control attached to the search bar input
   */
  control = new FormControl('');

  /**
   * Subject to unsubscribe from observables when component is destroyed
   */
  private destroy$ = new Subject<void>();

  /**
   * Listen to the control value changes with a debounce time of 1 second
   * to emit the value change event
   */
  ngOnInit() {
    this.control.valueChanges
      .pipe(debounceTime(500), takeUntil(this.destroy$))
      .subscribe(value => this.valueChange.emit(value));
  }

  /**
   * Unsubscribe from control valueChanges observable
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
