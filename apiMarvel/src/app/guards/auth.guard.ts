import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { tap } from 'rxjs';

import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService,
               private  router: Router ) {

  }

  //Verificar guard
 canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): any
     {
      return this.authService.validarToken()
      .pipe(
        tap( isAuth => {
          if( !isAuth) {
            this.router.navigateByUrl('/login')  
          }
        }
        )
      )
    }
  }


