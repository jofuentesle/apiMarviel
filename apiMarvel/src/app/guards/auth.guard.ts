import { inject } from "@angular/core";
import { CanActivateFn } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from '../service/auth.service';

export const AuthGuard: CanActivateFn = (route, state) => {

  //injectamos servicio
  const authService = inject(AuthService);
  const router = inject(Router)

  return authService.validarToken()
  .pipe( 
    tap( !autentificado ) {
      this.router.navigate
    }
  )
};
