import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DEFAULT_LIMIT_SIZE } from 'src/app/shared/constants/default-limit-size';
import { QueryParams } from 'src/app/shared/models/query-params.model';

import { SortEvent } from '../models/sort-event.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  buildQueryParams(queryParams: QueryParams): HttpParams {
    // Default params
    const params = {
      offset: '0',
      limit: DEFAULT_LIMIT_SIZE
    } as any;

    if (queryParams == null) {
      return new HttpParams({ fromObject: params });
    }

    Object.keys(queryParams)
      .filter(key => key !== 'sort' && key !== 'resetList')
      .forEach(key => {
        params[key] = queryParams[key];
      });

    if (queryParams.sort) {
      const { value, order } = queryParams.sort as SortEvent;
      params.sort = value;
      params.direction = order;
    }

    if (queryParams.resetList) {
      params.offset = '0';
    }

    return new HttpParams({ fromObject: params });
  }
}
