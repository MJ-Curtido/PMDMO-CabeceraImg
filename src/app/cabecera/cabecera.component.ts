import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  txtMostrarOcultar: String;
  flagAngularTemp: Boolean;
  flagTradiTemp: Boolean;
  mostrarTemp: Boolean;

  @Output() mostrar = new EventEmitter<Boolean>();
  @Output() imgAngular = new EventEmitter<String>();
  @Output() imgTradi = new EventEmitter<String>();

  cambiarImgModoAngular() {
    if (this.flagAngularTemp) {
      this.imgAngular.emit('../../assets/imgs/hornet.jpeg');
    }
    else {
      this.imgAngular.emit('../../assets/imgs/caballero.jpeg');
    }

    this.flagAngularTemp = !this.flagAngularTemp;
  }

  cambiarImgModoTradi() {
    if (this.flagTradiTemp) {
      this.imgTradi.emit('../../assets/imgs/hornet.jpeg');
    }
    else {
      this.imgTradi.emit('../../assets/imgs/caballero.jpeg');
    }

    this.flagTradiTemp = !this.flagTradiTemp;
  }

  mostrarOcularImg() {
    if (!this.mostrarTemp) {
      this.txtMostrarOcultar = "Mostrar";
    }
    else {
      this.txtMostrarOcultar = "Ocultar";
    }

    this.mostrarTemp = !this.mostrarTemp;

    this.mostrar.emit(this.mostrarTemp);
  }

  constructor() {
    this.txtMostrarOcultar = "Ocultar";
    this.flagAngularTemp = true;
    this.flagTradiTemp = true;
    this.mostrarTemp = false;
  }

  ngOnInit(): void {
  }

}