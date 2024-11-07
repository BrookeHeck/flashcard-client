import { Injectable } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private route: ActivatedRoute) { }

  public navigateToSelectRoleComponent(): void {
    this.router.navigate(['role-select'], {relativeTo: this.route});
  }

  public navigateToLoginPage(): void {
    this.router.navigate([''], {relativeTo: this.route})
  }
}
