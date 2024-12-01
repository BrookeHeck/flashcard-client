import { Injectable } from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {Observable} from "rxjs";
import OrganizationOverviewDetails from "../model/organization-overview-details";
import NewOrganizationRequest from "../model/new-organization-request";
import Organization from "../model/Organization";

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

  public createOrganization(organizationDisplayName: string): Observable<Organization> {
    return this.httpRequest.postRequest<string, Organization>('organization/create-organization', organizationDisplayName);
  }

  public deleteOrganization(organizationId: number): void {
    return this.httpRequest.deleteById('organization/delete-organization', organizationId);
  }
}
