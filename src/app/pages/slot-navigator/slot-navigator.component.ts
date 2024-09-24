import {Component} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {Observable} from "rxjs";
import {HttpDataService} from "../../core/services/http-data.service";

@Component({
  selector: 'app-slot-navigator',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    UpperCasePipe,
    NgOptimizedImage
  ],
  templateUrl: './slot-navigator.component.html',
  styleUrl: './slot-navigator.component.scss',
})
export class SlotNavigatorComponent {
  gameProviders = [
    'EGT', 'NET ENT', 'IGROSOFT', 'GAME ART', 'PRAGMATIC PLAY',
    'ISOFTBET', 'PLAYSON', 'MULTISLOT', '1X2 GAMING'
  ];

  constructor(private httpService: HttpDataService) {
  }

  gameCategories$: Observable<any> = this.httpService.getSlotCategories();

  onProviderSelect(provider: string) {
    // Handle game provider selection logic
  }
  // categories = [
  //   { name: 'Top Slots', id: 1 },
  //   { name: 'Favorites', id: 2 },
  //   { name: 'New Games', id: 3 },
  //   { name: 'Buy Bonus', id: 4 },
  //   { name: 'History', id: 5 }
  // ];
  //


}
