import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './contacto.component';
import { MatBadgeModule, MatButtonModule, MatInputModule } from '@angular/material';
@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class ContactoModule { }
