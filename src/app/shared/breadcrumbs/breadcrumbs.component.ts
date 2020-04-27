import { Component, OnInit } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Router, ActivationEnd } from '@angular/router';
import { retry, map, filter } from 'rxjs/internal/operators';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  titulo: string;
  constructor(private _router: Router, private _title: Title, private _meta: Meta) {

    this.getdataRouter().subscribe( data => { 
      this.titulo = data.titulo;
      this._title.setTitle( this.titulo) ;
      const metaTag: MetaDefinition = {
        name: 'description',
        content : this.titulo
      };
    });
   }

  ngOnInit() {
  }

  getdataRouter() {
    return (this._router.events.pipe(
      filter(evento  => evento instanceof ActivationEnd ),
      filter((evento: ActivationEnd)  => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data ) 
     ));
  }

}
