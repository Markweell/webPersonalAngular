import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crm-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.sass']
})
export class HabilidadComponent implements OnInit {
  @Input () percent: string;
  @Input () skill;
  @Input () color;
  @Input () bgcolor;
  constructor() { }

  ngOnInit() {
    console.log(this.percent);
  }

}
