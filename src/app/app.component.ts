import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthenticationService} from "./service/authentication.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'flashcard-game';

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.authService.setUserDataOnPageRefresh();
  }
}
