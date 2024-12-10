import {Component, inject, OnInit} from '@angular/core';
import {Observable, switchMap} from "rxjs";
import {UserRolesService} from "../../../service/user-roles.service";
import {ActivatedRoute} from "@angular/router";
import {ROLE} from "../../../enum/ROLE";
import {AsyncPipe, NgIf} from "@angular/common";
import UserDetailsForRole from "../../../model/user-details-for-role";

@Component({
  selector: 'app-manage-admins',
  standalone: true,
  imports: [
    NgIf,
    AsyncPipe
  ],
  templateUrl: './manage-admins.component.html',
  styleUrl: './manage-admins.component.scss'
})
export class ManageAdminsComponent implements OnInit {
  organizationAdminList$: Observable<UserDetailsForRole[]>;
  userRoleService = inject(UserRolesService);
  route = inject(ActivatedRoute);
  cols: {header: string, field: string}[];

  ngOnInit() {
    this.organizationAdminList$ = this.route.paramMap.pipe(
      switchMap(params => this.userRoleService
        .getUserDetailsForRolesAtOrg(parseInt(params.get('organizationId')), ROLE.ADMIN))
    );
    this.cols = [
      {header: 'First Name', field: 'firstName'},
      {header: 'Last Name', field: 'lastName'},
      {header: 'Email', field: 'email'},
      {header: 'Date Assigned', field: 'dateAssignedRole'},
      {header: 'Status', field: 'userStatus'}
    ]
  }
}
