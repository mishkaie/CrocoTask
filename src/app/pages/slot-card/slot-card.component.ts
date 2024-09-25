import {Component, Input} from '@angular/core';
import {NgClass, NgIf, NgOptimizedImage} from "@angular/common";
import {gameInterface} from "../../core/interfaces/gameInterface";


@Component({
  selector: 'app-slot-card',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    NgClass
  ],
  templateUrl: './slot-card.component.html',
  styleUrl: './slot-card.component.scss'
})
export class SlotCardComponent {
  @Input() game: gameInterface | null = null;

  playGame(game: gameInterface) {
    console.log(game);
  }
}
