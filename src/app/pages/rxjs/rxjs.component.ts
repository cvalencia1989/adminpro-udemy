import { Component, OnInit, OnDestroy} from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: []
})
export class RxjsComponent implements OnInit, OnDestroy {


  subcription: Subscription;
  constructor() {

    this.subcription = this.regresaObservable().subscribe(
    numero  => console.log( 'numero', numero ) ,
    error => console.error('error', error ) ,
    () => console.log('obs termino')
  );

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
  }


  regresaObservable(): Observable<number> {



  return new Observable( observer => {
      let contador = 0;

      let intervalo = setInterval( () => {
        contador += 1;
        const salida = {
          valor: contador
        };
        observer.next(salida);

        // if (contador === 3 ) {
        //    clearInterval(intervalo);
        //    observer.complete();
        // }

        // if ( contador === 2 ) {
        //   //clearInterval(intervalo);
        //   observer.error('auxilio');
        // }
      }, 100);
    }).pipe(
      map(resp => resp["valor"]),
      filter( ( valor, index ) => {
        if (valor % 2 === 1) {
          return true;
        } else {
          return false;
        }

      })
    );
  }
}
