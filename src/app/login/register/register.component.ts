import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


import { UsuarioService } from '../../services/services.index';
import { Usuario } from 'src/app/models/usuario.model';


declare function init_plugins();

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../login.component.css']
})

export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(public _USUARIO_SERVICES: UsuarioService, public _ROUTER: Router) { }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup(
      {
        nombre: new FormControl( null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
        confirmaPassword: new FormControl(null, Validators.required),
        acuerdoCondicioes: new FormControl(false)
      },
      {
        validators: this.sonIguales('password', 'confirmaPassword')
      }
    );

    this.forma.setValue({
      nombre: 'Claudio Valencia',
      email: 'ing.cvalencia@gmail.com',
      password: '123',
      confirmaPassword: '123',
      acuerdoCondicioes: true
    });
  }

  sonIguales(password, confirmaPassword) {
    return ( group: FormGroup) => {

      const pass1 = group.controls[password].value;
      const pass2 = group.controls[confirmaPassword].value;

      if ( pass1 === pass2) {
        return null;
      }

      return {
        sonIguales : true
      };
    };
  }

  registrarUsuario() {
    if (this.forma.invalid) {
      Swal.fire('inportante', 'contraseñas no son iguales', 'warning');
    }

    if (!this.forma.value.acuerdoCondicioes) {
      Swal.fire('inportante', 'debe de aceptar las condiciones', 'warning');
    }

    const usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.email,
      this.forma.value.password
    );

    this._USUARIO_SERVICES.crearUsuario(usuario)
    .subscribe( response => this._ROUTER.navigate(['/login']));

  }

}







