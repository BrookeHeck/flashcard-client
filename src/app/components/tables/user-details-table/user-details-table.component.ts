import {Component, Input} from '@angular/core';
import UserDetailsForRole from "../../../model/user-details-for-role";
import {TableModule} from "primeng/table";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {USER_STATUS} from "../../../enum/USER_STATUS";
import {Button} from "primeng/button";
import {RadioButtonModule} from "primeng/radiobutton";

@Component({
  selector: 'app-user-details-table',
  standalone: true,
  imports: [
    TableModule,
    NgForOf,
    NgIf,
    AsyncPipe,
    Button,
    RadioButtonModule
  ],
  templateUrl: './user-details-table.component.html',
  styleUrl: './user-details-table.component.scss'
})
export class UserDetailsTableComponent {
  @Input() userDetails: UserDetailsForRole[] = [new UserDetailsForRole(1, 2, 'firstName', 'lastName', 'email', 'today', USER_STATUS.ACTIVE)];
  cols: {field: string; header: string }[] = [
    {header: 'First Name', field: 'firstName'},
    {header: 'Last Name', field: 'lastName'},
    {header: 'Email', field: 'email'},
    {header: 'Date Assigned', field: 'dateAssignedRole'},
    {header: 'Status', field: 'userStatus'},
    {header: '', field: 'none'},

  ];

}
