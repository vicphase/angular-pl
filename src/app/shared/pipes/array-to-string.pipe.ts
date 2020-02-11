import { TitleCasePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arrayToString'
})
export class ArrayToStringPipe implements PipeTransform {
  transform(array: string[], ...args: unknown[]): string {
    return array.map(value => new TitleCasePipe().transform(value)).join(', ');
  }
}
