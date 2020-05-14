import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

declare function init_plugins();
declare const gapi: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string = '';
  auth2: any;

  constructor(public _ROUTER: Router, public _USUARIOSERVICE: UsuarioService) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();
    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }

  }

  googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '783492439565-3g3eeovd90osjjddqt99vr2c89avcvcc.apps.googleusercontent.com',
        scope: 'profile email',
        cookiepolicy: 'single_host_origin'
      });
      this.atachSigIn( document.getElementById('btnGoogleSigIn') );
    });

  }

  atachSigIn( element ) {
    this.auth2.attachClickHandler( element, {}, googleUser => {
      const profile = googleUser.getBasicProfile();
      const token = googleUser.getAuthResponse().id_token;
      console.log(token);
      this._USUARIOSERVICE.logInGoole( token )
      .subscribe(response => this._ROUTER.navigate(['./dashboard']));

    });
  }

  ingresar(forma: NgForm) {

    if (!forma.valid) {
      return;
    }

    const usuario = new Usuario( null, forma.value.email, forma.value.password );

    this._USUARIOSERVICE.logIn( usuario, forma.value.recuerdame)
    .subscribe(response => this._ROUTER.navigate(['./dashboard']));

  }

}
