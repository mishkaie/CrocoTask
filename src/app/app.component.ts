import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from "./pages/sidebar/sidebar.component";
import {SlotNavigatorComponent} from "./pages/slot-navigator/slot-navigator.component";
import {SlotGridComponent} from "./pages/slot-grid/slot-grid.component";
import {NgOptimizedImage} from "@angular/common";
import {SlotProvidersComponent} from "./pages/slot-providers/slot-providers.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SlotNavigatorComponent, SlotGridComponent, NgOptimizedImage, SlotProvidersComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CrocoTask';
}
