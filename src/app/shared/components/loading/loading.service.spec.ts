import { TestBed } from '@angular/core/testing';
import { take } from 'rxjs/operators';

import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should set the loading value to true on show', () => {
    service.show();

    service.loading$.pipe(take(1)).subscribe(value => expect(value).toBeTruthy());
  });

  it('should set the loading value to false on hide', () => {
    service.hide();

    service.loading$.pipe(take(1)).subscribe(value => expect(value).toBeFalsy());
  });
});
