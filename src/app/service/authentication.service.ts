import {Inject, Injectable} from '@angular/core';
import { HttpRequestService} from "./http-request.service";
import User from "../model/user";
import {map, Observable} from "rxjs";
import {JwtHelperService} from "@auth0/angular-jwt";
import {DOCUMENT} from "@angular/common";
import {UserStoreService} from "../store/user-store.service";
import {PERMISSION} from "../enum/PERMISSION";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string = '';
  private loggedInUsername = '';
  private readonly sessionStorage;

  constructor(private http: HttpRequestService, private jwtHelper: JwtHelperService,
              @Inject(DOCUMENT) private document: Document, private userStore: UserStoreService) {
    this.sessionStorage = this.document.defaultView?.sessionStorage;
  }

  public login(username: string, password: string): Observable<User> {
    return this.http.sendBasicAuthRequest(username, password).pipe(map(response => {
      this.saveToken(response.headers.get('jwt-header'));
      this.addUserToLocalCache(response.body);
      return response.body;
    }));
  }
  public register(user: User): Observable<User> {
    return this.http.postRequest<User, User>('user/register', user);
  }

  public selectRoleById(roleId: number): Observable<PERMISSION[]> {
    return this.http.getRequest<PERMISSION[]>(`user/select-role-org/${roleId}`);
  }

  public logout(): void {
    this.token = '';
    this.loggedInUsername = '';
    this.sessionStorage.removeItem('user');
    this.sessionStorage.removeItem('benchmark');
  }

  public saveToken(token: string): void {
    this.token = token;
    this.sessionStorage.setItem('benchmark', token);
  }

  public loadToken(): void {
    this.token = this.sessionStorage.getItem('benchmark');
  }

  public getToken(): string {
    return this.token;
  }

  public addUserToLocalCache(user: User): void {
    this.sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUserFromCache(): User {
    return JSON.parse(this.sessionStorage.getItem('user')) as User;
  }

  public isLoggedIn(): boolean {
    if(this.sessionStorage) {
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
    return false;
  }

  setUserDataOnPageRefresh() {
    if(this.sessionStorage) {
      this.loadToken();
      this.userStore.saveUser(this.getUserFromCache());
    }
  }
}
