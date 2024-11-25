import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {DataViewModule} from "primeng/dataview";
import {OrganizationApiService} from "../../../service/organization-api.service";
import NewOrganizationRequest from "../../../model/new-organization-request";
import {take, tap} from "rxjs";

@Component({
  selector: 'app-new-organization-requests',
  standalone: true,
  imports: [
    Button,
    NgForOf,
    NgClass,
    PrimeTemplate,
    DataViewModule,
    NgIf,
    DatePipe
  ],
  templateUrl: './new-organization-requests.component.html',
  styleUrl: './new-organization-requests.component.scss'
})
export class NewOrganizationRequestsComponent implements OnInit {
  requests: NewOrganizationRequest[];
  public constructor(private organizationApi: OrganizationApiService) {}

  ngOnInit() {
    this.organizationApi.getNewOrganizationRequests().pipe(
      tap(result => console.log(result)),
      take(1))
      .subscribe(requests => this.requests = requests);
  }

}
