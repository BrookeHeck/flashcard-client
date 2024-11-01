import { HttpInterceptorFn } from '@angular/common/http';
import { inject} from "@angular/core";
import {AuthenticationService} from "../service/authentication.service";

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthenticationService);
  if(req.url.includes('user/login') || req.url.includes('user/register')) {
    return next(req);
  }
  authService.loadToken();
  const header: string = `Bearer ${authService.getToken()}`;
  const request = req.clone({setHeaders: {Authorization: header} });
  return next(request);
};
