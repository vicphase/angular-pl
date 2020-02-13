import { TestBed } from '@angular/core/testing';

import { DEFAULT_LIMIT_SIZE } from '../constants/default-limit-size';
import { QueryParams } from '../models/query-params.model';
import { HttpHelperService } from './http-helper.service';

describe('HttpHelperService', () => {
  let service: HttpHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHelperService);
  });

  it('should return the default query params if value not exists', () => {
    const expected: Partial<QueryParams> = {
      offset: 0,
      limit: DEFAULT_LIMIT_SIZE
    };

    expect(service.buildQueryParams()).toEqual(expected);
  });

  it('should set the offset to 0 if reset list is true', () => {
    const value: Partial<QueryParams> = {
      offset: 10,
      limit: DEFAULT_LIMIT_SIZE,
      resetList: true
    };
    const expected: Partial<QueryParams> = {
      offset: 0,
      limit: DEFAULT_LIMIT_SIZE,
      resetList: true
    };
    expect(service.buildQueryParams(value)).toEqual(expected);
  });

  it('should return the same params', () => {
    const value: Partial<QueryParams> = {
      offset: 10,
      limit: DEFAULT_LIMIT_SIZE
    };
    const expected: Partial<QueryParams> = {
      offset: 10,
      limit: DEFAULT_LIMIT_SIZE
    };
    expect(service.buildQueryParams(value)).toEqual(expected);
  });
});
