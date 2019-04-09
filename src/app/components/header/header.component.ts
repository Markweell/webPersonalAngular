import { Component, OnInit, ElementRef, HostListener, AfterViewInit } from '@angular/core';

@Component({
  selector: 'crm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, AfterViewInit {


  variable= false;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.variable = false;
  }
  ngAfterViewInit(): void {
    let headerContainer= this.elementRef.nativeElement.querySelector('.headerContainer')
    headerContainer.addEventListener('mousewheel', this.moverPantalla.bind(this))
    headerContainer.addEventListener('DOMMouseScroll', this.moverPantalla.bind(this))
  }

  annadirClase(){
    this.variable = true;
  }
  moverPantalla(e){
    if((e.deltaY || e.detail) > 0){
      this.variable = true;
    }
  }
}
