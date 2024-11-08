import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import User from "../model/user";
import Role from "../model/role";
import {PERMISSION} from "../enum/PERMISSION";

@Injectable({
  providedIn: 'root'
})
export class UserStoreService {
  private _user$: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  public user$: Observable<User> = this._user$.asObservable();

  private _selectedRole$: BehaviorSubject<Role> = new BehaviorSubject<Role>(null);
  public selectedRole$: Observable<Role> = this._selectedRole$.asObservable();

  private _permissions$: BehaviorSubject<PERMISSION[]> = new BehaviorSubject<PERMISSION[]>(null);
  public permission$: Observable<PERMISSION[]> = this._permissions$.asObservable();

  public saveUser(user: User): void {
    this._user$.next(user);
  }

  get userRoles$(): Observable<Role[]> {
    return this.user$.pipe(map(user => user?.roles ?? []));
  }

  public setSelectedRole(role: Role): void {
    this._selectedRole$.next(role);
  }

  public setPermissions(permissions: PERMISSION[]): void {
    this._permissions$.next(permissions);
  }
}
