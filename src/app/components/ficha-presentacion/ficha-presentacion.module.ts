import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FichaPresentacionComponent } from './ficha-presentacion.component';

@NgModule({
  declarations: [FichaPresentacionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FichaPresentacionComponent
  ]
})
export class FichaPresentacionModule { }
