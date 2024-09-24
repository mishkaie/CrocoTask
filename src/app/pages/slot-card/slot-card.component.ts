import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

export interface Game {
  name: string;
  imageUrl: string
}

@Component({
  selector: 'app-slot-card',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './slot-card.component.html',
  styleUrl: './slot-card.component.scss'
})
export class SlotCardComponent {
  @Input() game: Game | null = null; // Expecting a Game object passed as an input

  playGame(game: Game) {
    // Logic to play the selected game
  }

  contactSupport(game: Game) {
    // Logic to contact support for the selected game
  }
}
