import {Component} from '@angular/core';
import {TableModule} from "primeng/table";
import { RadioButtonModule } from 'primeng/radiobutton';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {UserStoreService} from "../../../store/user-store.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-select-role',
  standalone: true,
  imports: [TableModule, RadioButtonModule, NgForOf, AsyncPipe, NgIf, FormsModule],
  templateUrl: './select-role.component.html',
  styleUrl: './select-role.component.scss'
})
export class SelectRoleComponent {
  selectedRoleId: number;
  columns: {field: string, header: string}[] = [
    {field: "role", header: "Role"},
    {field: "organizationName", header: "Organization"},
    {field: "id", header: "Select Role/Org"}
  ];

  constructor(public userStore: UserStoreService) {
  }


}
