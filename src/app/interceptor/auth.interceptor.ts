import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if(req.url.includes('user/login') || req.url.includes('user/register')) {
    return next(req);
  }
  return next(req);
};
