import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RouterLink} from "@angular/router";
import {LoginPageComponent} from "../login-page/login-page.component";

@Component({
  selector: 'app-splash-page',
  standalone: true,
  imports: [ButtonModule, RouterLink, LoginPageComponent],
  templateUrl: './splash-page.component.html',
  styleUrl: './splash-page.component.scss'
})
export class SplashPageComponent {

}
