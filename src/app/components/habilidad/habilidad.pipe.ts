import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'habilidad'
})
export class HabilidadPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.toUpperCase();
  }

}
