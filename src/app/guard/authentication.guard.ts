import { CanActivateFn } from '@angular/router';
import {inject} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";
import {environment} from "../../environments/environment";
import {RouterService} from "../service/router.service";

export const authenticationGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthenticationService);
  const routerService = inject(RouterService);
  if(authService.isLoggedIn()) return true;
  else routerService.navigateToLoginPage();
  return false;
};
