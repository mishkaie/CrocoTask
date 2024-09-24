import {Component, OnInit, Signal} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf, NgOptimizedImage, UpperCasePipe} from "@angular/common";
import {Observable} from "rxjs";
import {HttpDataService} from "../../core/services/http-data.service";
import {FilteredCategoryInterface} from "../../core/interfaces/categoryInterface";
import {SharedStateService} from "../../core/services/shared-state.service";

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
export class SlotNavigatorComponent implements OnInit {
  activeCategorySignal!: Signal<FilteredCategoryInterface | null>;  // Signal for the active category
  constructor(
    private httpService: HttpDataService,
    private sharedState: SharedStateService
  ) {}

  gameCategories$: Observable<FilteredCategoryInterface[]> = this.httpService.getSlotCategories();
  ngOnInit(): void {
    // Subscribe to the active category signal
    this.activeCategorySignal = this.sharedState.activeCategory$;
  }
  onCategorySelect(category: FilteredCategoryInterface): void {
    this.sharedState.setActiveCategory(category); // Update the active category in the service
    // this.sharedState.updateSlotState(category)
  }

  trackByCategory(index: number, category: FilteredCategoryInterface): string {
    return category.name;
  }

  // Check if a category is active
  isActiveCategory(category: FilteredCategoryInterface): boolean {
    return this.activeCategorySignal() === category;
  }
}
