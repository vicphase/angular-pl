import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { QueryParams } from '../../models/query-params.model';

export interface CrudEvents<T> {
  create: EventEmitter<void>;
  detail: EventEmitter<T>;
  edit: EventEmitter<T>;
  delete: EventEmitter<T>;
  toggle: EventEmitter<T>;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent<T = any> implements CrudEvents<T> {
  @Input() list: T[] = [];
  @Input() hasMoreItems: boolean;
  @Input() loading: boolean;
  @Output() create = new EventEmitter<void>();
  @Output() detail = new EventEmitter<T>();
  @Output() edit = new EventEmitter<T>();
  @Output() delete = new EventEmitter<T>();
  @Output() toggle = new EventEmitter<T>();
  @Output() getMoreItems = new EventEmitter<void>();
  @Output() filterItems = new EventEmitter<Partial<QueryParams>>();

  updateSearchBarFilter(text: string): void {
    this.filterItems.emit({ text });
  }

  updateSort(sort: Sort): void {
    this.filterItems.emit({ sort });
  }
}
