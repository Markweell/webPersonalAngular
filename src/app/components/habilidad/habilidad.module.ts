import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HabilidadComponent } from './habilidad.component';
import { HabilidadPipe } from './habilidad.pipe';

@NgModule({
  declarations: [HabilidadComponent, HabilidadPipe],
  imports: [
    CommonModule
  ],
  exports: [
    HabilidadComponent
  ],
  providers: [HabilidadPipe]
})
export class HabilidadModule { }
