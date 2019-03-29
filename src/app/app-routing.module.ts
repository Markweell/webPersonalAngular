import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path: '',
  loadChildren: './views/inicio/inicio.module#InicioModule'
},
{
  path: 'blog',
  loadChildren: './views/blog/blog.module#BlogModule'
},
{
  path: 'curriculum',
  loadChildren: './views/curriculum/curriculum.module#CurriculumModule'
},
{
  path: 'contacto',
  loadChildren: './views/contacto/contacto.module#ContactoModule'
},
{
  path: '404',
  loadChildren: './views/contacto/contacto.module#ContactoModule'
},
{
  path: '**',
  redirectTo: '404'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
