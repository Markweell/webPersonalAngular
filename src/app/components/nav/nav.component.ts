import { Component, OnInit } from '@angular/core';
import { AccesoJSONService } from 'src/app/acceso-json.service';
import { Router } from '@angular/router';


@Component({
  selector: 'crm-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  elements;
  constructor(private acceso: AccesoJSONService, private route: Router) { }

  ngOnInit() {
    this.acceso.getJSON().subscribe((data)=>{
      this.elements = data['NAV'];
    });

  }
  public redirect(ruta){
    this.route.navigate([ruta]);
    //this.route.navigate([ruta]);
    //history.pushState({},"",ruta);
  }

}
