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

  public navigateToHomePage(): void {
    this.router.navigate(['home'], {relativeTo: this.route})
  }

  public navigateToManageNewOrgRequests(): void {
    this.router.navigate(['manage-new-org-requests'], {relativeTo: this.route})
  }
}
