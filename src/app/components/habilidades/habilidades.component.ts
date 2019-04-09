import { Component, OnInit, Input, AfterViewChecked, AfterViewInit, ElementRef } from '@angular/core';
import { AccesoJSONService } from 'src/app/acceso-json.service';

@Component({
  selector: 'crm-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.sass']
})
export class HabilidadesComponent implements OnInit{
  elements;
  constructor(private acceso: AccesoJSONService) { }

  ngOnInit() {
    this.acceso.getJSON().subscribe((data) => {
      this.elements = data['HABILIDADES'];
    });
  }

}
