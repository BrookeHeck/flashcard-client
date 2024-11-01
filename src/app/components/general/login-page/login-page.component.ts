import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {AuthenticationService} from "../../../service/authentication.service";
import {take} from "rxjs";

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

  constructor(private authService: AuthenticationService) {
  }

  login() {
    const {username, password} = this.loginForm.controls;
    this.authService.login(username.value, password.value).pipe(take(1)).subscribe(result => console.log(result));
  }

}
