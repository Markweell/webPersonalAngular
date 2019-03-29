import { Component, OnInit } from '@angular/core';
import { AccesoJSONService } from 'src/app/acceso-json.service';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'crm-ficha-presentacion',
  templateUrl: './ficha-presentacion.component.html',
  styleUrls: ['./ficha-presentacion.component.sass']
})
export class FichaPresentacionComponent implements OnInit {
  elements;
  constructor(private acceso: AccesoJSONService) { }

  ngOnInit() {
    this.acceso.getJSON().subscribe((data)=>{
      this.elements = data['FICHA'];
      console.log(this.elements);
    });

  }

}
