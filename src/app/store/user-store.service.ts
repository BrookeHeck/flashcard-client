import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import User from "../model/user";
import Role from "../model/role";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public user$: Observable<User> = this._user$.asObservable();

  public saveUser(user: User): void {
    this._user$.next(user);
  }

  get userRoles$(): Observable<Role[]> {
    return this.user$.pipe(map(user => user?.roles ?? []));
  }
}
