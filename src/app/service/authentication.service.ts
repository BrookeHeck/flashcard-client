import { Injectable } from '@angular/core';
import { HttpRequestService} from "./http-request.service";
import User from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpRequestService) { }

  public login(username: string, password: string) {
    return this.http.basicAuth(username, password);
  }

  public register(user: User): Observable<User> {
    return this.http.postRequest<User, User>('user/register', user);
  }
}
