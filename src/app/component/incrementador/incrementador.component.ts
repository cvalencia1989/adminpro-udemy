import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress', {static: false}) txtProgress: ElementRef;
  @Input( 'nombre' ) leyenda: string = 'leyenda';
  @Input() porcentaje: number = 0;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onChange( newValue: number) {

    if (this.porcentaje >= 100 && newValue >  0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && newValue <  0 && newValue == null) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += newValue;

    this.txtProgress.nativeElement.values = this.porcentaje;

    this.cambioValor.emit( this.porcentaje );
  }

  cambiarValor( valor ) {
    if (this.porcentaje >= 100 && valor >  0) {
      this.porcentaje = 100;
      return;
    }

    if (this.porcentaje <= 0 && valor <  0 && valor == null) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje += valor;

    this.cambioValor.emit( this.porcentaje );

  }

}
