import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';
import { FichaPresentacionModule } from 'src/app/components/ficha-presentacion/ficha-presentacion.module';

@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    FichaPresentacionModule
  ]
})
export class CurriculumModule { }
