import { EventEmitter } from '@angular/core';

/**
 * Interface for CRUD events
 */
export interface CrudEvents<T> {
  /**
   * POST operation
   */
  create: EventEmitter<void>;
  /**
   * GET operation
   */
  detail: EventEmitter<T>;
  /**
   * PUT operation
   */
  edit: EventEmitter<T>;
  /**
   * DELETE operation
   */
  delete: EventEmitter<T>;
}
