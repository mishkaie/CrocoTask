import { Component } from '@angular/core';
import {NgForOf} from "@angular/common";
import {SlotCardComponent} from "../slot-card/slot-card.component";

@Component({
  selector: 'app-slot-grid',
  standalone: true,
  imports: [
    NgForOf,
    SlotCardComponent
  ],
  templateUrl: './slot-grid.component.html',
  styleUrl: './slot-grid.component.scss'
})
export class SlotGridComponent {
  games = [
    { name: 'Burning Hot', imageUrl: 'assets/burning-hot.jpg' },
    { name: 'Temple of Nudges', imageUrl: 'assets/temple-of-nudges.jpg' },
    { name: 'Starburst', imageUrl: 'assets/starburst.jpg' },
    // Add other games here
  ];
}
