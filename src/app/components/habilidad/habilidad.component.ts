import { Component, OnInit, Input, ElementRef, HostListener} from '@angular/core';


@Component({
  selector: 'crm-habilidad',
  templateUrl: './habilidad.component.html',
  styleUrls: ['./habilidad.component.sass']
})

export class HabilidadComponent implements OnInit{
  @Input () percent: string;
  @Input () skill: string;
  @Input () topColor: string;
  @Input () endColor: string;
  @Input () color: string;
  @Input () bgColor: string;

  public topColor1: string;
  public rotate1: string;
  public bgColor3: string;
  public bgColor2: string;
  public bgColorPadre: string;
  constructor(private elRef: ElementRef) {
  }

  @HostListener('window:scroll', ['$event'])
  doSomethingOnWindowsScroll($event: Event){
    console.log($event.target['scrollingElement'].scrollTop)
    console.log($event)
    const porcentaje = this.progress(this.percent);
    if($event.target['scrollingElement'].scrollTop > 200){
      this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    }
    if($event['pageY'] > 200){
      this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    };
  }

  ngOnInit() {
    const porcentaje = this.progress(this.percent);
    this.bgColorPadre = 'linear-gradient(0deg, transparent 50%, ' + this.endColor + ' 50%)';
    this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    this.rotate1 = 'rotate(0deg)';
    this.topColor1 = 'linear-gradient(0deg, ' + this.topColor + ' 50%,  transparent 50%)'
    this.bgColor2 = 'linear-gradient(0deg, ' + this.bgColor + ' 50%, transparent 50%)';
    this.bgColor3 = this.bgColor + 'content-box';

    // setTimeout(() => {
    //   this.rotate1 = 'rotate(' + porcentaje + 'deg)';
    // }, 1500);
  }
  progress(percent) {
    return percent / 100 * 180;
  }

  rotate(){
    let circulo = this.elRef.nativeElement.querySelector('.circuloHijo1');
    circulo.style.transform="rotate(20deg)";
  }


}
