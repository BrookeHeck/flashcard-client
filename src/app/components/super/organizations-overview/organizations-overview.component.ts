import {Component, Input} from '@angular/core';
import {AccordionModule} from "primeng/accordion";
import {DatePipe, NgForOf, NgIf} from "@angular/common";
import OrganizationOverviewDetails from "../../../model/organization-overview-details";
import {Button} from "primeng/button";

@Component({
  selector: 'app-organizations-overview',
  standalone: true,
  imports: [
    AccordionModule,
    NgIf,
    NgForOf,
    DatePipe,
    Button
  ],
  templateUrl: './organizations-overview.component.html',
  styleUrl: './organizations-overview.component.scss'
})
export class OrganizationsOverviewComponent {
  @Input() organizationOverviewDetails: OrganizationOverviewDetails[];

}
