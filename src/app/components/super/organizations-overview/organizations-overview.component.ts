import { Component } from '@angular/core';
import {OrganizationApiService} from "../../../service/organization-api.service";

@Component({
  selector: 'app-organizations-overview',
  standalone: true,
  imports: [],
  templateUrl: './organizations-overview.component.html',
  styleUrl: './organizations-overview.component.scss'
})
export class OrganizationsOverviewComponent {
  private constructor(private organizationApi: OrganizationApiService) {}

  
}
