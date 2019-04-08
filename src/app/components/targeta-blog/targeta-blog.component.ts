import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crm-targeta-blog',
  templateUrl: './targeta-blog.component.html',
  styleUrls: ['./targeta-blog.component.sass']
})
export class TargetaBlogComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() img: string;
  @Input() created_at: string;
  @Input() created_by: string;
  @Input() tag: Array<string>;

  constructor() { }

  ngOnInit() {
  }

}
