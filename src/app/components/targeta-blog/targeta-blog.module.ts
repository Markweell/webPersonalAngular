import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TargetaBlogComponent } from './targeta-blog.component';

@NgModule({
  declarations: [TargetaBlogComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TargetaBlogComponent
  ]
})
export class TargetaBlogModule { }
