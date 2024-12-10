import { Component } from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {RouterOutlet} from "@angular/router";
import {ToastModule} from "primeng/toast";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-main-frame',
  standalone: true,
  imports: [
    ToolbarComponent,
    RouterOutlet,
    ToastModule,
    FooterComponent
  ],
  templateUrl: './main-frame.component.html',
  styleUrl: './main-frame.component.scss'
})
export class MainFrameComponent {

}
