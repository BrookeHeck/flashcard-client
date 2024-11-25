import { Routes } from '@angular/router';
import {SplashPageComponent} from "./components/general/splash-page/splash-page.component";
import {RegistrationPageComponent} from "./components/general/registration-page/registration-page.component";
import {HomePageComponent} from "./components/general/home-page/home-page.component";
import {SelectRoleComponent} from "./components/general/select-role/select-role.component";
import {authenticationGuard} from "./guard/authentication.guard";
import {
  NewOrganizationRequestsComponent
} from "./components/super/new-organization-requests/new-organization-requests.component";

export const routes: Routes = [
  {path: '', component: SplashPageComponent },
  {path: 'register', component: RegistrationPageComponent},
  {path: 'home', component: HomePageComponent, canActivate: [authenticationGuard]},
  {path: 'role-select', component: SelectRoleComponent, canActivate: [authenticationGuard]},
  {path: 'manage-new-org-requests', component: NewOrganizationRequestsComponent, canActivate: [authenticationGuard]}
];
