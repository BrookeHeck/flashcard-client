import { Injectable } from '@angular/core';
import { HttpRequestService} from "./http-request.service";

@Injectable({
  providedIn: 'root'
})
export class UserRolesService {

  constructor(private http: HttpRequestService) { }

}
