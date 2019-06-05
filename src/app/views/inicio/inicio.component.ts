import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccesoJSONService } from 'src/app/acceso-json.service';

@Component({
  selector: 'crm-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
  elements: string;
  constructor(
    private route: ActivatedRoute,
    private accesoJson: AccesoJSONService) { }

  ngOnInit() {
    this.accesoJson.getJSON().subscribe((data) => {
      this.elements = data['INICIO'];
    });
  }

}
