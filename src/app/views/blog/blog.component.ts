import { Component, OnInit } from '@angular/core';
import { AccesoJSONService } from 'src/app/acceso-json.service';

@Component({
  selector: 'crm-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.sass']
})

export class BlogComponent implements OnInit {
  elements;
  elementsCopy;
  input;
  constructor(private acceso: AccesoJSONService) { }
  ngOnInit() {
    this.acceso.getJSON().subscribe((data) => {
      this.elements = data['BLOG'];
      this.elementsCopy = this.elements.slice();
    });
  }
  busquedaDeCoincidencias(){
    let elements = [];
    this.elementsCopy.forEach(element => {
        if(RegExp(this.input).test(element['title'])){
          elements.push(element);
        }
    });
    this.elements= elements;
  }

}
