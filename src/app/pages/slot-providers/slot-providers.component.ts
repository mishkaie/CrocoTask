import {Component, signal} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {HttpDataService} from "../../core/services/http-data.service";
import { catchError, Observable, of, tap} from "rxjs";
import {FilteredProviderInterface, ProviderInterface} from "../../core/interfaces/providerInterface";
import {SharedStateService} from "../../core/services/shared-state.service";
import { DEFAULT_VISIBLE_PROVIDERS } from '../../../environment/environment';
@Component({
  selector: 'app-slot-providers',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './slot-providers.component.html',
  styleUrl: './slot-providers.component.scss'
})
export class SlotProvidersComponent {

  // Using signal for show More/Less
  showMore = signal(false);
  // Default visible count is 10
  visibleCount = signal(DEFAULT_VISIBLE_PROVIDERS);
  // Parameter to save providers length
  providerLength: number = 0;
  providers$: Observable<FilteredProviderInterface[]> = this.httpService.getProviders().pipe(
    tap(res => this.providerLength = res.length),
    catchError(error => {
      console.error('Error fetching providers:', error);
      return of([]);
    })
  ); // Observable to hold providers
  constructor(
    private httpService: HttpDataService,
    private sharedState: SharedStateService ) {}

  // Toggle the "See More" functionality
  toggleSeeMore() {
    if (this.showMore()) {
      // Reset to default if showing less
      this.visibleCount.set(10);
    } else {
      // Set full length of providers
      this.visibleCount.set(this.providerLength)
    }
    this.showMore.update(value => !value);
  }

  filterByProvider(provider: FilteredProviderInterface) {
    //Remove active from categories
    this.httpService.getSlotsByProvider(provider.name);
    this.sharedState.clearActiveCategory();
    console.log(`Filtered by: ${provider.name}`);
  }

  trackByProvider(index: number, provider: FilteredProviderInterface) {
    return provider.name;
  }
}
