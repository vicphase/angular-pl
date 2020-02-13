import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Service that knows the loading state of the app
 */
@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  /**
   * Subject that saves a boolean value true if the app is loading and false if not loading data
   */
  private loadingSubject = new BehaviorSubject<boolean>(false);

  /**
   * Observable that listens to the loading subject
   */
  loading$ = this.loadingSubject.asObservable();

  /**
   * Called when the app is loading data
   */
  show(): void {
    this.loadingSubject.next(true);
  }

  /**
   * Called when the app finished loading data
   */
  hide(): void {
    this.loadingSubject.next(false);
  }
}
