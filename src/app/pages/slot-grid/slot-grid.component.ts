import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgClass, NgForOf, NgOptimizedImage } from "@angular/common";
import { SlotCardComponent } from "../slot-card/slot-card.component";
import { gameInterface } from "../../core/interfaces/gameInterface";
import { HttpDataService } from "../../core/services/http-data.service";
import { SharedStateService } from "../../core/services/shared-state.service";
import { Observable } from 'rxjs';

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
export class SlotGridComponent implements OnInit {
  games$: Observable<gameInterface[]>;

  constructor(
    private httpService: HttpDataService,
    private sharedState: SharedStateService
  ) {
    this.games$ = this.sharedState.games$;
  }

  ngOnInit(): void {
    // Initial load of games
    this.httpService.getSlotsByProvider().subscribe();
  }
}
