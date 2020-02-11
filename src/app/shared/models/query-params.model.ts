import { Sort } from '@angular/material/sort';

export interface QueryParams {
  offset: number;
  limit: number;
  resetList: boolean;
  sort: Sort;
  text: string;
}
