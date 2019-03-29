import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './components/nav/nav.module';
import { CustomMaterialModule } from './shared/custom-material/custom-material.module';
import { HeaderModule } from './components/header/header.module';
import { FichaPresentacionComponent } from './components/ficha-presentacion/ficha-presentacion.component';
import { FichaPresentacionModule } from './components/ficha-presentacion/ficha-presentacion.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavModule,
    HeaderModule,
    CustomMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
