import { Component } from '@angular/core';
import {AsyncPipe, NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {SlotCardComponent} from "../slot-card/slot-card.component";
import {gameInterface} from "../../core/interfaces/gameInterface";
import {HttpDataService} from "../../core/services/http-data.service";
import {SharedStateService} from "../../core/services/shared-state.service";

@Component({
  selector: 'app-slot-grid',
  standalone: true,
  imports: [
    NgForOf,
    SlotCardComponent,
    NgClass,
    AsyncPipe,
    NgOptimizedImage
  ],
  templateUrl: './slot-grid.component.html',
  styleUrl: './slot-grid.component.scss'
})
export class SlotGridComponent {
  games$ = this.httpService.getSlotsByProvider();
  constructor(
    private httpService: HttpDataService,
    private sharedState: SharedStateService ) {}

}
