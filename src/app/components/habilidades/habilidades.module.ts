import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadesComponent } from './habilidades.component';
import { HabilidadModule } from '../habilidad/habilidad.module';


@NgModule({
  declarations: [HabilidadesComponent],
  imports: [
    CommonModule, HabilidadModule
  ],
  exports: [
    HabilidadesComponent
  ]
})
export class HabilidadesModule { }
