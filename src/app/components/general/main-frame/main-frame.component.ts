import { Component } from '@angular/core';
import {ToolbarComponent} from "../toolbar/toolbar.component";
import {RouterOutlet} from "@angular/router";
import {ToastModule} from "primeng/toast";

@Component({
  selector: 'app-main-frame',
  standalone: true,
  imports: [
    ToolbarComponent,
    RouterOutlet,
    ToastModule
  ],
  templateUrl: './main-frame.component.html',
  styleUrl: './main-frame.component.scss'
})
export class MainFrameComponent {

}
