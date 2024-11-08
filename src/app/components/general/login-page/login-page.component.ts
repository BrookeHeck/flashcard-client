import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {AuthenticationService} from "../../../service/authentication.service";
import {take} from "rxjs";
import {UserStoreService} from "../../../store/user-store.service";
import {RouterService} from "../../../service/router.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    Button,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  loginForm: FormGroup = new FormGroup<any>({
    username: new FormControl(""),
    password: new FormControl(""),
  });

  constructor(private authService: AuthenticationService,
              private userStore: UserStoreService,
              private routerService: RouterService) {
  }

  login() {
    const {username, password} = this.loginForm.controls;
    this.authService.login(username.value, password.value).pipe(take(1)).subscribe(user => {
      this.userStore.saveUser(user);
      if(user.roles) this.routerService.navigateToSelectRoleComponent();
    });
  }

}
