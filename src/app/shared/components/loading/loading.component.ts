import { ChangeDetectionStrategy, Component } from '@angular/core';

import { LoadingService } from './loading.service';

/**
 * Component that displays when our app is loading data
 */
@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent {
  /**
   * Observable that returns a boolean value to display the component
   */
  loading$ = this.loadingService.loading$;
  /**
   * Creates an instance of loading component.
   * @param loadingService service that contains the loading state of the app
   */
  constructor(private loadingService: LoadingService) {}
}
