import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurriculumRoutingModule } from './curriculum-routing.module';
import { CurriculumComponent } from './curriculum.component';
import { FichaPresentacionModule } from 'src/app/components/ficha-presentacion/ficha-presentacion.module';
import { ExperienciaLaboralModule } from 'src/app/components/experiencia-laboral/experiencia-laboral.module';
import { CursosFormacionModule } from 'src/app/components/cursos-formacion/cursos-formacion.module';
import { HabilidadesModule } from 'src/app/components/habilidades/habilidades.module';

@NgModule({
  declarations: [CurriculumComponent],
  imports: [
    CommonModule,
    CurriculumRoutingModule,
    FichaPresentacionModule,
    ExperienciaLaboralModule,
    CursosFormacionModule,
    HabilidadesModule
  ]
})
export class CurriculumModule { }
