import { TherapyTypes } from '../enums/therapy-types.enum';

/**
 * Model of the student entity
 */
export interface Student {
  /**
   * Primary key
   */
  id?: string;
  /**
   * Name of the student
   */
  name: string;
  /**
   * Array containing the therapies of the student
   */
  therapies: TherapyTypes[];
}
