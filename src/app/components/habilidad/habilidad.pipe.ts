import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "habilidad"
})
export class HabilidadPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if(value.length>7){
      value=value.slice(0,7)
    }
    return value;
  }
}
