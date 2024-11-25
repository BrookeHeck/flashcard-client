import {Component, Input} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import { NgForOf, NgIf} from "@angular/common";
import OrganizationOverviewDetails from "../../../model/organization-overview-details";

@Component({
  selector: 'app-organizations-overview',
  standalone: true,
  imports: [
    AccordionModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './organizations-overview.component.html',
  styleUrl: './organizations-overview.component.scss'
})
export class OrganizationsOverviewComponent {
  @Input() organizationOverviewDetails: OrganizationOverviewDetails[];

}
