import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  imagenModoAngular: String = '../../assets/imgs/caballero.jpeg';
  @ViewChild('imgTradi') imgTradi!: ElementRef;
  txtMostrarOcultar: String = "Ocultar";
  flagAngular: Boolean = true;
  flagTradi: Boolean = true;
  mostrar: Boolean = false;

  cambiarImgModoAngular() {
    if (this.flagAngular) {
      this.imagenModoAngular = '../../assets/imgs/hornet.jpeg';

      this.flagAngular = false;
    }
    else {
      this.imagenModoAngular = '../../assets/imgs/caballero.jpeg';

      this.flagAngular = true;
    }
  }

  cambiarImgModoTradi() {
    if (this.flagTradi) {
      this.imgTradi.nativeElement.src = '../../assets/imgs/hornet.jpeg';

      this.flagTradi = false;
    }
    else {
      this.imgTradi.nativeElement.src = '../../assets/imgs/caballero.jpeg';

      this.flagTradi = true;
    }
  }

  mostrarOcularImg() {
    if (!this.mostrar) {
      this.txtMostrarOcultar = "Mostrar";

      this.mostrar = true;
    }
    else {
      this.txtMostrarOcultar = "Ocultar";

      this.mostrar = false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}