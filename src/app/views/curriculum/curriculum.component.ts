import { Component, OnInit, ElementRef, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'crm-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.sass']
})
export class CurriculumComponent implements OnInit{
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
