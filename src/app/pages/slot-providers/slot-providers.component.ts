import {Component, signal} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {HttpDataService} from "../../core/services/http-data.service";
import { Observable, tap} from "rxjs";
import {ProviderInterface} from "../../core/interfaces/providerInterface";
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
  visibleCount = signal(10);
  // Parameter to save providers length
  providerLength: number = 0;
  providers$: Observable<ProviderInterface[]> = this.httpService.getProviders().pipe(
    tap(res => this.providerLength = res.length)
  ); // Observable to hold providers
  constructor(private httpService: HttpDataService) {}

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

  filterByProvider(provider: ProviderInterface) {
    console.log(`Filtered by: ${provider.name}`);
  }
}
