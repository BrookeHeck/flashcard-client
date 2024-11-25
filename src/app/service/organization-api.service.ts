import { Injectable } from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {Observable, tap} from "rxjs";
import OrganizationOverviewDetails from "../model/organization-overview-details";

@Injectable({
  providedIn: 'root'
})
export class OrganizationApiService {
  constructor(private httpRequest: HttpRequestService) { }

  public getOrganizationOverviewDetails(): Observable<OrganizationOverviewDetails[]> {
    return this.httpRequest.getRequest<OrganizationOverviewDetails[]>
    ('organization/get-organization-overview-details').pipe(tap(result => console.log(result)));
  }
}
