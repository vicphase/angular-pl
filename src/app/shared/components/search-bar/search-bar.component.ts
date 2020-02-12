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

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit, OnDestroy {
  @Output() valueChange = new EventEmitter<string>();
  control = new FormControl('');

  private destroy$ = new Subject<void>();

  ngOnInit() {
    this.control.valueChanges
      .pipe(debounceTime(1000), takeUntil(this.destroy$))
      .subscribe(value => this.valueChange.emit(value));
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
