import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import {map} from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Token } from '@angular/compiler/src/ml_parser/lexer';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;
  token: string;

  constructor(public http: HttpClient, public _ROUTER: Router) {
    this.cargarStorage();
  }

  guardarLocalStorage(id: string, token: string, usuario: Usuario) {
    localStorage.setItem('id', id);
    localStorage.setItem('token', token);
    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.usuario = usuario;
    this.token = token;
  }

  logInGoole(token: string) {
    const url = URL_SERVICIOS + 'login/google';

    return this.http.post( url, { token } ).pipe(
      map((response: any) => {
        this.guardarLocalStorage(response.id, response.token, response.usuario);

        Swal.fire('Usuario Autenticado Correctamente', response.usuario.email, 'success');

        return true;
      })
    );
  }


  logIn(usuario: Usuario, recordar: boolean = false) {
    const url = URL_SERVICIOS + 'login';

    if ( recordar ) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.setItem('email', '');
    }

    return this.http.post( url, usuario).pipe(
      map((response: any) => {
        this.guardarLocalStorage(response.id, response.token, response.usuario);

        Swal.fire('Usuario Autenticado Correctamente', usuario.email, 'success');

        return true;
      })
    );
  }

  crearUsuario(usuario: Usuario) {
    const url = URL_SERVICIOS + 'usuario';

    return this.http.post( url, usuario)
    .pipe(
      map((response: any) => {
        Swal.fire('Usuario Creado', usuario.email, 'success');
      })
    );
  }

  estaLogueado() {
    return (this.token) ? true : false;
  }

  logOut() {
    this.token = undefined;
    this.usuario = null;

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this._ROUTER.navigate(['./login']);
  }

  cargarStorage() {
   if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse(localStorage.getItem('usuario'));
   }
  }

}
