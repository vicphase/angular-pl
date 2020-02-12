import { of } from 'rxjs';

export class LoadingServiceMock {
  loading$ = of(false);
  show = () => {};
  hide = () => {};
}
