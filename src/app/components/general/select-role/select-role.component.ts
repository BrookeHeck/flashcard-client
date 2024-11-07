import {Component} from '@angular/core';
import {TableModule} from "primeng/table";
import { RadioButtonModule } from 'primeng/radiobutton';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UserStoreService} from "../../../store/user-store.service";
import {FormsModule} from "@angular/forms";
import {Button} from "primeng/button";
import {AuthenticationService} from "../../../service/authentication.service";
import {take} from "rxjs";
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
    this.authService.selectRoleById(this.selectedRole.id).pipe(take(1)).subscribe(permissions => {
      this.userStore.setSelectedRole(this.selectedRole);
      this.userStore.setPermissions(permissions);
      this.routerService.navigateToHomePage();
    })
  }

}
