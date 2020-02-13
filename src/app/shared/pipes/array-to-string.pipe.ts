import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe to transform array of strings to a single string
 */
@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {
  /**
   * Transforms array to string pipe
   * @param array Example: ['test', 'test2']
   * @returns Example: test, test2
   */
  transform(array: string[]): string {
    return array.map(value => new TitleCasePipe().transform(value)).join(', ');
  }
}
