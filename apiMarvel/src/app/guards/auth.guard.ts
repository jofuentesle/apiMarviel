import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor( private authService: AuthService,
               private  router: Router ) {

  }

 canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {

      this.authService.validarToken().subscribe(resp => {

        this.router.navigateByUrl('/')

        return resp;
      })

      
    
      return false;
 }
};
