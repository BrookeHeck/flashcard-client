import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {AsyncPipe, DatePipe, NgClass, NgForOf, NgIf} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {DataViewModule} from "primeng/dataview";
import {OrganizationApiService} from "../../../service/organization-api.service";
import NewOrganizationRequest from "../../../model/new-organization-request";
import {BehaviorSubject, take} from "rxjs";
import {RouterService} from "../../../service/router.service";

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
    DatePipe,
    AsyncPipe
  ],
  templateUrl: './new-organization-requests.component.html',
  styleUrl: './new-organization-requests.component.scss'
})
export class NewOrganizationRequestsComponent implements OnInit {
  _requests$: BehaviorSubject<NewOrganizationRequest[]> = new BehaviorSubject<NewOrganizationRequest[]>([]);
  public constructor(public organizationApi: OrganizationApiService, public routerService: RouterService) {}

  ngOnInit() {
    this.organizationApi.getNewOrganizationRequests().pipe(
      take(1))
      .subscribe(requests => this._requests$.next(requests));
  }

  acceptNewOrganizationRequest(requestId: number, orgName: string, adminUserId: number): void {
    this.organizationApi.acceptNewOrganizationRequest(requestId, orgName, adminUserId).pipe(take(1)).subscribe(() => {
      this.removeRequestFromListByRequestId(requestId);
    })
  }

  denyNewOrganizationRequest(requestId: number): void {
    this.organizationApi.denyNewOrganizationRequest(requestId).pipe(take(1)).subscribe(() => {
      this.removeRequestFromListByRequestId(requestId);
    })
  }

  removeRequestFromListByRequestId(requestId: number): void {
    const updateRequestList = this._requests$.getValue().filter(request => request.id != requestId);
    this._requests$.next(updateRequestList);
  }

}
