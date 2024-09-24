import {Injectable, signal, WritableSignal} from '@angular/core';
import {FilteredCategoryInterface} from "../interfaces/categoryInterface";

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private activeCategorySignal: WritableSignal<FilteredCategoryInterface | null> = signal<FilteredCategoryInterface | null>(null);

  // Expose the active category as a readonly signal
  public activeCategory$ = this.activeCategorySignal.asReadonly();

  // Method to set the active category
  setActiveCategory(category: FilteredCategoryInterface): void {
    this.activeCategorySignal.set(category);
  }

  // Method to clear the active category
  clearActiveCategory(): void {
    this.activeCategorySignal.set(null);
  }

  // Method to get the current active category
  getActiveCategory(): FilteredCategoryInterface | null {
    return this.activeCategorySignal();
  }
  constructor() { }
}
