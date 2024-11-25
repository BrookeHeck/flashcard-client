import { Component } from '@angular/core';
import {UserStoreService} from "../../../store/user-store.service";
import {AsyncPipe, NgIf} from "@angular/common";
import {PERMISSION} from "../../../enum/PERMISSION";
import {SuperHomeComponent} from "../../super/super-home/super-home.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgIf,
    SuperHomeComponent,
    AsyncPipe,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  public PERMISSION = PERMISSION;
  constructor(public userStore: UserStoreService) {
  }
}
