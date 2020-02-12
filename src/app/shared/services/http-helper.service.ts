import { Injectable } from '@angular/core';

import { DEFAULT_LIMIT_SIZE } from '../constants/default-limit-size';
import { QueryParams } from '../models/query-params.model';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  buildQueryParams(queryParams: Partial<QueryParams>): Partial<QueryParams> {
    const defaultQueryParams: Partial<QueryParams> = {
      offset: 0,
      limit: DEFAULT_LIMIT_SIZE
    };
    const params = { ...defaultQueryParams, ...queryParams };
    if (!queryParams) {
      return defaultQueryParams;
    }
    if (queryParams.resetList) {
      params.offset = 0;
    }
    return params;
  }
}
