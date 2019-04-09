import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'crm-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.sass']
})
export class InicioComponent implements OnInit {
variable: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }

}
