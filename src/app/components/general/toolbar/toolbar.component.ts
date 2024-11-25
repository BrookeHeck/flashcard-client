import {Component, OnInit} from '@angular/core';
import User from "../../../model/user";
import {UserStoreService} from "../../../store/user-store.service";
import {take} from "rxjs";
import {ToolbarModule, } from "primeng/toolbar";
import {Button} from "primeng/button";
import {AvatarModule} from "primeng/avatar";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [
    ToolbarModule,
    Button,
    AvatarModule,
    NgIf,
  ],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent implements OnInit {
  public user: User;

  constructor(private userStore: UserStoreService) {}

  ngOnInit() {
    this.userStore.user$.pipe(take(1)).subscribe(user => this.user=user);
  }

}
