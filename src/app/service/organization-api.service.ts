import { Injectable } from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrganizationApiService {
  constructor(private httpRequest: HttpRequestService) { }
  
  public getOrganizationOverviewDetails: Observable<>
}
