import { Component, OnInit } from '@angular/core';
import { AccesoJSONService } from 'src/app/acceso-json.service';

@Component({
  selector: 'crm-cursos-formacion',
  templateUrl: './cursos-formacion.component.html',
  styleUrls: ['./cursos-formacion.component.sass']
})
export class CursosFormacionComponent implements OnInit {
  elements;
  constructor(private acceso: AccesoJSONService) { }

  ngOnInit() {
    this.acceso.getJSON().subscribe((data) => {
      this.elements = data['APTITUDES'];
    });

  }


}
