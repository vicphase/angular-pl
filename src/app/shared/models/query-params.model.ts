import { SortEvent } from './sort-event.model';

export interface QueryParams {
  offset: number;
  limit: number;
  resetList: boolean;
  sort: SortEvent;
}
