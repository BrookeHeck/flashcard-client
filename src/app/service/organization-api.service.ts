import { Injectable } from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {Observable} from "rxjs";
import OrganizationOverviewDetails from "../model/organization-overview-details";
import NewOrganizationRequest from "../model/new-organization-request";
import Organization from "../model/organization";

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

  public acceptNewOrganizationRequest(requestId: number, organizationName: string, adminUserId: number): Observable<number> {
    const endpoint = `request-access/accept-access-request/${requestId}/${adminUserId}`;
    return this.httpRequest.postRequest<string, number>(endpoint, organizationName);
  }

  public denyNewOrganizationRequest(requestId: number): Observable<number> {
    return this.httpRequest.deleteById('request-access/deny-new-organization-request', requestId);
  }

  public createOrganization(organizationDisplayName: string): Observable<Organization> {
    return this.httpRequest.postRequest<string, Organization>('organization/create-organization', organizationDisplayName);
  }

  public deleteOrganization(organizationId: number): Observable<number> {
    return this.httpRequest.deleteById('organization/delete-organization', organizationId);
  }
}
