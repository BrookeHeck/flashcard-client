import {Component, OnInit} from '@angular/core';
import User from "../../../model/user";
import {UserStoreService} from "../../../store/user-store.service";
import {take} from "rxjs";
import {ToolbarModule, } from "primeng/toolbar";
import {Button} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {NgIf} from "@angular/common";
import {SplitButtonModule} from "primeng/splitbutton";
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    Button,
    AvatarModule,
    NgIf,
    SplitButtonModule,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  user: User;
  menuItems: MenuItem[];

  constructor(private userStore: UserStoreService) {}

  ngOnInit() {
    this.userStore.user$.pipe(take(1)).subscribe(user => this.user=user);
    this.menuItems =  [{
      label: 'Switch Roles',
      icon: 'pi pi-refresh'
    }, {
      label: 'Edit Profile',
      icon: 'pi pi-times'}];
  }

}
