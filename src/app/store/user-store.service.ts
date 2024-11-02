import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import User from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public user$: Observable<User> = this._user$.asObservable();

  public saveUser(user: User) {
    this._user$.next(user);
  }

  get userRoles() {
    return this._user$.getValue().roles;
  }

  get username() {
    return this._user$.getValue().username;
  }
}
