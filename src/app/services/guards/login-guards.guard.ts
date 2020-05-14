import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardsGuard implements CanActivate {
  
  constructor(public _USUARIO_SERVICES: UsuarioService, public _ROUTER: Router) {}

  canActivate() {
    if (this._USUARIO_SERVICES.estaLogueado()) {
      console.log('paso por el guard');
    } else {
      console.log('blokeado por el guard');
      this._ROUTER.navigate(['./login']);
    }

    return true;
  }
}
