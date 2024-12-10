import { Injectable } from '@angular/core';
import { HttpRequestService} from "./http-request.service";
import {ROLE} from "../enum/ROLE";
import Role from "../model/role";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor(private http: HttpRequestService) { }

  getAllUsersForRoleAtOrg(orgId: number, role: ROLE): Observable<Role[]> {
    return this.http.getRequest<Role[]>(`role/get-all-role-users-organization/${orgId}/${role}`);
  }

}
