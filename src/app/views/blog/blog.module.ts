import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { TargetaBlogModule } from 'src/app/components/targeta-blog/targeta-blog.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    BlogRoutingModule,
    TargetaBlogModule,
    FormsModule
  ]
})
export class BlogModule { }
