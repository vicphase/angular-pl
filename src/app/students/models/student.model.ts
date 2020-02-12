import { TherapyTypes } from '../../therapies/enums/therapy-types.enum';

export interface Student {
  id?: string;
  name: string;
  therapies: TherapyTypes[];
}
