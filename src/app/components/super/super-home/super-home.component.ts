import {Component, OnInit} from '@angular/core';
import {OrganizationsOverviewComponent} from "../organizations-overview/organizations-overview.component";
import {OrganizationApiService} from "../../../service/organization-api.service";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import OrganizationOverviewDetails from "../../../model/organization-overview-details";

@Component({
  selector: 'app-super-home',
  standalone: true,
  imports: [
    OrganizationsOverviewComponent,
    AsyncPipe
  ],
  templateUrl: './super-home.component.html',
  styleUrl: './super-home.component.scss'
})
export class SuperHomeComponent implements OnInit {
  organizationOverDetails: Observable<OrganizationOverviewDetails[]>;
  constructor(private organizationApi: OrganizationApiService) {}

  ngOnInit() {
    this.organizationOverDetails=this.organizationApi.getOrganizationOverviewDetails();
  }

}
