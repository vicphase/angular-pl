import { Injectable } from '@angular/core';

import { DEFAULT_LIMIT_SIZE } from '../constants/default-limit-size';
import { QueryParams } from '../models/query-params.model';

/**
 * Service injected in services that make HTTP requests
 */
@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  /**
   * Adds the necessary properties for an HTTP request
   * and sets offset to 0 if the list resets
   * @param queryParams query params gave by the list
   * @returns query params that will be sent to the API
   */
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
