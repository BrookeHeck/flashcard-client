import {Component, inject, OnInit} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {UserRolesService} from "../../../service/user-roles.service";
import {ActivatedRoute} from "@angular/router";
import {ROLE} from "../../../enum/ROLE";
import {AsyncPipe, NgIf} from "@angular/common";
import UserDetailsForRole from "../../../model/user-details-for-role";
import {UserDetailsTableComponent} from "../../tables/user-details-table/user-details-table.component";

@Component({
  selector: 'app-manage-admins',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe,
    UserDetailsTableComponent
  ],
  templateUrl: './manage-admins.component.html',
  styleUrl: './manage-admins.component.scss'
})
export class ManageAdminsComponent implements OnInit {
  organizationAdminList$: Observable<UserDetailsForRole[]>;
  userRoleService = inject(UserRolesService);
  route = inject(ActivatedRoute);

  ngOnInit() {
    this.organizationAdminList$ = this.route.paramMap.pipe(
      switchMap(params => this.userRoleService
        .getUserDetailsForRolesAtOrg(parseInt(params.get('organizationId')), ROLE.ADMIN))
    );
  }
}
