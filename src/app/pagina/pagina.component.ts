import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pagina',
  templateUrl: './pagina.component.html',
  styleUrls: ['./pagina.component.css']
})
export class PaginaComponent implements OnInit {
  @ViewChild('imgTradi') imgTradi!: ElementRef;

  srcImgAngular: String;
  mostrar: Boolean;

  cambiarMostrar(mostrarTemp: Boolean) {
    this.mostrar = mostrarTemp;
  }

  cambiarImgModoAngular(src: String) {
    this.srcImgAngular = src;
  }

  cambiarImgModoTradi(srcImgTradi: String) {
    this.imgTradi.nativeElement.src = srcImgTradi;
  }

  constructor() {
    this.srcImgAngular = '../../assets/imgs/caballero.jpeg';
    this.mostrar = false;
  }

  ngOnInit(): void {
  }

}
