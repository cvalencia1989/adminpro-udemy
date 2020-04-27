import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {
   this.contar3().then(
      () => console.log( 'Termino' )
      ).catch(
       error => () => console.log( 'Error en la promesa' )
      );
  }

  ngOnInit() {
  }

  contar3(): Promise<boolean> {

    let contador = 0;
    return ( new Promise( (resolve, reject) => {
    let intervalo =  setInterval(() => {
        contador += 1;
        console.log( contador )
        if (contador === 3) {
            resolve( true );
            clearInterval( intervalo );
        }
      }, 1000);
    }));

  }

}
