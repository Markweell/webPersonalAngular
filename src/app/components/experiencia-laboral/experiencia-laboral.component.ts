import { Component, OnInit } from '@angular/core';
import { AccesoJSONService } from 'src/app/acceso-json.service';

@Component({
  selector: 'crm-experiencia-laboral',
  templateUrl: './experiencia-laboral.component.html',
  styleUrls: ['./experiencia-laboral.component.sass']
})
export class ExperienciaLaboralComponent implements OnInit {
  elements;
  constructor(private acceso: AccesoJSONService) { }

  ngOnInit() {
    this.acceso.getJSON().subscribe((data) => {
      this.elements = data['EXPERIENCIA'];
    });

  }

}
