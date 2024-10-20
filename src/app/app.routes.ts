import { Routes } from '@angular/router';
import {SplashPageComponent} from "./components/general/splash-page/splash-page.component";
import {RegistrationPageComponent} from "./components/general/registration-page/registration-page.component";

export const routes: Routes = [
  {path: '', component: SplashPageComponent },
  {path: 'register', component: RegistrationPageComponent}
];
