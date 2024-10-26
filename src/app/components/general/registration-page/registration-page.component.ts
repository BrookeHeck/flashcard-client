import { Component } from '@angular/core';
import {InputTextModule} from "primeng/inputtext";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {AuthenticationService} from "../../../service/authentication.service";
import User from "../../../model/user";
import {filter, take} from "rxjs";

@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [
    InputTextModule,
    ReactiveFormsModule,
    Button
  ],
  templateUrl: './registration-page.component.html',
  styleUrl: './registration-page.component.scss'
})
export class RegistrationPageComponent {
  constructor(private authService: AuthenticationService) {
  }

  registrationForm = new FormGroup({
    firstName: new FormControl<string>(""),
    lastName: new FormControl<string>(""),
    username: new FormControl<string>(""),
    email: new FormControl<string>(""),
    password: new FormControl<string>(""),
    confirmPassword: new FormControl<string>("")
  });

  registerUser() {
   const {firstName, lastName, username, email, password }
     = this.registrationForm.controls
   const user = new User(firstName.value, lastName.value, username.value, email.value, password.value);
   this.authService.register(user).pipe(take(1)).subscribe();
  }

}
