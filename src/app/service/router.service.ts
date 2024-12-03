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
    this.router.navigate([''], {relativeTo: this.route});
  }

  public navigateToHomePage(): void {
    this.router.navigate(['home'], {relativeTo: this.route});
  }

  public navigateToManageNewOrgRequests(): void {
    this.router.navigate(['manage-new-org-requests'], {relativeTo: this.route});
  }

  public navigateToPageNotFound(): void {
    this.router.navigate(['page-not-found'], {relativeTo: this.route});
  }

  public navigateToOrganizationDetailsPage(organizationId: number) {
    this.router.navigate(['organization-details-page', organizationId], {relativeTo: this.route});
  }

  public navigateToManageAdmins(organizationId: number) {
    this.router.navigate(['manage-admins', organizationId], {relativeTo: this.route});
  }
}
