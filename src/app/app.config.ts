import {ApplicationConfig, importProvidersFrom} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {JwtModule} from "@auth0/angular-jwt";
import {authInterceptor} from "./interceptor/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),
    provideHttpClient(
      withInterceptors([authInterceptor])
    ),
    importProvidersFrom(JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:8080"]
      }
    }))
  ]
};

export function tokenGetter() {
  return localStorage.getItem("benchmark")
}
