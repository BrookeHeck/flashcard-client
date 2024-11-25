import {Component} from '@angular/core';
import {TableModule} from "primeng/table";
import { RadioButtonModule } from 'primeng/radiobutton';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UserStoreService} from "../../../store/user-store.service";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {AuthenticationService} from "../../../service/authentication.service";
import {take, zip} from "rxjs";
import Role from "../../../model/role";
import {RouterService} from "../../../service/router.service";

@Component({
  selector: 'app-select-role',
  standalone: true,
  imports: [TableModule, RadioButtonModule, NgForOf, AsyncPipe, NgIf, FormsModule, Button],
  templateUrl: './select-role.component.html',
  styleUrl: './select-role.component.scss'
})
export class SelectRoleComponent {
  selectedRole: Role;
  columns: {field: string, header: string}[] = [
    {field: "role", header: "Role"},
    {field: "organizationName", header: "Organization"},
    {field: "id", header: "Select Role/Org"}
  ];

  constructor(public userStore: UserStoreService, private authService: AuthenticationService, private routerService: RouterService) {}

  public submitRoleSelection() {
    zip(this.authService.selectRoleById(this.selectedRole.id), this.userStore.user$).pipe(take(1))
      .subscribe(([permissions, user]) => {
        user.selectedRole=this.selectedRole;
        user.permissions=permissions;
        this.userStore.saveUser(user);
        this.authService.addUserToLocalCache(user);
        this.routerService.navigateToHomePage();
    });
  }

}
