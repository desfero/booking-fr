import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'times'
})
export class TimesPipe implements PipeTransform {
  transform(value: number): any {
    return (new Uint8Array(value)).map((v, i) => i);
  }
}
