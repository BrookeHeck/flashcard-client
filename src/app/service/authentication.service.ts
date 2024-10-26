import { Injectable } from '@angular/core';
import { HttpRequestService} from "./http-request.service";
import User from "../model/user";
import {Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string = '';
  private loggedInUsername = '';

  constructor(private http: HttpRequestService, private jwtHelper: JwtHelperService) { }

  public login(username: string, password: string) {
    return this.http.sendBasicAuthRequest(username, password);
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

  public loadToken(): void {
    this.token = localStorage.getItem('benchmark');
  }

  public getToken(): string {
    return this.token;
  }

  public addUserToLocalCache(user: string): void {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromCache(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public isLoggedIn(): boolean {
    this.loadToken();
    if(this.token) {
      const subject = this.jwtHelper.decodeToken(this.token).sub;
      if((subject != null || subject != '') && !this.jwtHelper.isTokenExpired(this.token)) {
        this.loggedInUsername = subject;
        return true;
      } else return false;
    } else {
      this.logout();
      return false;
    }
  }
}
