import { Injectable } from '@angular/core';
import { HttpRequestService} from "./http-request.service";
import User from "../model/user";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string = '';
  private loggedInUsername = '';

  constructor(private http: HttpRequestService) { }

  public login(username: string, password: string) {
    return this.http.basicAuth(username, password);
  }

  public register(user: User): Observable<User> {
    return this.http.postRequest<User, User>('user/register', user);
  }

  public logout(): void {
    this.token = '';
    this.loggedInUsername = '';
    localStorage.removeItem('user');
    localStorage.removeItem('benchmark');
  }

  public saveToken(token: string): void {
    this.token = token;
    localStorage.setItem('benchmark', token);
  }

  public getToken(): string {
    return localStorage.getItem('benchmark');
  }

  public addUserToLocalCache(user: string): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }
}
