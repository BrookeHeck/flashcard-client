import { Injectable } from '@angular/core';
import { HttpRequestService} from "./http-request.service";
import {ROLE} from "../enum/ROLE";
import Role from "../model/role";
import {Observable} from "rxjs";
import UserDetailsForRole from "../model/user-details-for-role";

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor(private http: HttpRequestService) { }

  getUserDetailsForRolesAtOrg(orgId: number, role: ROLE): Observable<UserDetailsForRole[]> {
    return this.http.getRequest<UserDetailsForRole[]>(`role/get-user-details-for-role-by-org/${orgId}/${role}`)
  }

}
