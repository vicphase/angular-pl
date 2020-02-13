import { Sort } from '@angular/material/sort';

/**
 * Model for query params in HTTP requests
 */
export interface QueryParams {
  /**
   * Pagination
   */
  offset: number;
  /**
   * Number of items the response should bring
   */
  limit: number;
  /**
   * Value used internally to reset the offset
   */
  resetList: boolean;
  /**
   * Used to sort the items of a collection
   */
  sort: Sort;
  /**
   * Find items by string like text
   */
  text: string;
}
