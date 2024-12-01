import { Injectable } from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {Observable} from "rxjs";
import OrganizationOverviewDetails from "../model/organization-overview-details";
import NewOrganizationRequest from "../model/new-organization-request";

@Injectable({
  providedIn: 'root'
})
export class OrganizationApiService {
  constructor(private httpRequest: HttpRequestService) { }

  public getOrganizationOverviewDetails(): Observable<OrganizationOverviewDetails[]> {
    return this.httpRequest.getRequest<OrganizationOverviewDetails[]>
    ('organization/get-organization-overview-details');
  }

  public getNewOrganizationRequests(): Observable<NewOrganizationRequest[]> {
    return this.httpRequest.getRequest<NewOrganizationRequest[]>
    ('request-access/get-new-organization-requests')
  }

  public getNumberOfOrganizationRequests(): Observable<number> {
    return this.httpRequest.getRequest<number>('request-access/get-number-of-new-org-requests');
  }
}
