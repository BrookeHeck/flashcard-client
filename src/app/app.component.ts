import {Component, Inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import User from "./model/user";
import {AuthenticationService} from "./service/authentication.service";
import {UserStoreService} from "./store/user-store.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flashcard-game';
}
