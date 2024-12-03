import { Injectable } from '@angular/core';
import {HttpRequestService} from "./http-request.service";
import Role from "../model/role";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RoleApiService {
  constructor(private httpRequest: HttpRequestService) { }

  public createRole(role: Role): Observable<Role> {
    return this.httpRequest.postRequest<Role, Role>('role/create-role', role);
  }

  public deleteRole(role: Role): Observable<boolean> {
    return this.httpRequest.deleteObject<Role>('role/delete-role', role);
  }

}
