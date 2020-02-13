import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Sort } from '@angular/material/sort';

import { CrudEvents } from '../../models/crud-events.model';
import { QueryParams } from '../../models/query-params.model';

/**
 * Component extended by other components that have a list behavior
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent<T = any> implements CrudEvents<T> {
  /**
   * List of items that will be displayed in the list
   */
  @Input() list: T[] = [];
  /**
   * This property is used to know if the list should get more lazy loaded items
   */
  @Input() hasMoreItems: boolean;
  /**
   * If the list is still loading the list will not request more lazy loaded items
   */
  @Input() loading: boolean;
  /**
   * Event to create a new item of the collection
   */
  @Output() create = new EventEmitter<void>();
  /**
   * Event to see the detail of an item of the collection
   */
  @Output() detail = new EventEmitter<T>();
  /**
   * Event to edit an item of the collection
   */
  @Output() edit = new EventEmitter<T>();
  /**
   * Event to delete an item of the collection
   */
  @Output() delete = new EventEmitter<T>();
  /**
   * Event to get more items of the collection when the user reaches the bottom of the list
   */
  @Output() getMoreItems = new EventEmitter<void>();
  /**
   * Event to get filtered items when the user uses a filter of our list
   */
  @Output() filterItems = new EventEmitter<Partial<QueryParams>>();

  /**
   * Emits an event to filter items when the search bar text is updated
   * @param text query parameter to filter the list
   */
  updateSearchBarFilter(text: string): void {
    this.filterItems.emit({ text });
  }

  /**
   * Emits an event to filter items when a sort value changes in our list
   * @param sort property obtained from sort columns to send as query params
   */
  updateSort(sort: Sort): void {
    this.filterItems.emit({ sort });
  }
}
