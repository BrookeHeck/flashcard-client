import {Component, inject, OnInit} from '@angular/core';
import {Observable, switchMap, take} from "rxjs";
import Role from "../../../model/role";
import {UserRolesService} from "../../../service/user-roles.service";
import {ActivatedRoute} from "@angular/router";
import {ROLE} from "../../../enum/ROLE";

@Component({
  selector: 'app-manage-admins',
  standalone: true,
  imports: [],
  templateUrl: './manage-admins.component.html',
  styleUrl: './manage-admins.component.scss'
})
export class ManageAdminsComponent implements OnInit {
  organizationAdminList: Observable<Role[]>;
  userRoleService = inject(UserRolesService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.organizationAdminList = this.route.paramMap.pipe(
      switchMap(params => this.userRoleService.getAllUsersForRoleAtOrg(params['organizationId'], ROLE.ADMIN)),
    );
  }

}
