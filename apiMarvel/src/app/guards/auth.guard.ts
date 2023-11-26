import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  console.log("paso por el canactivate")
  return true;
};
