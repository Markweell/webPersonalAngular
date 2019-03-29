import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RouterModule } from '@angular/router';
import { CustomMaterialModule } from 'src/app/shared/custom-material/custom-material.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [NavComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomMaterialModule,
    HttpClientModule
  ],
  exports: [
    NavComponent
  ]
})
export class NavModule { }
