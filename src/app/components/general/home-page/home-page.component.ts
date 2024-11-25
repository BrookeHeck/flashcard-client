import { Component } from '@angular/core';
import {UserStoreService} from "../../../store/user-store.service";
import {NgIf} from "@angular/common";
import {PERMISSION} from "../../../enum/PERMISSION";
import {SuperHomeComponent} from "../../super/super-home/super-home.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NgIf,
    SuperHomeComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  constructor(public userStore: UserStoreService) {
  }

  protected readonly PERMISSION = PERMISSION;
  protected readonly PERMISSION = PERMISSION;
  protected readonly PERMISSION = PERMISSION;
  protected readonly PERMISSION = PERMISSION;
  protected readonly PERMISSION = PERMISSION;
}
