import {Injectable, signal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {FilteredCategoryInterface} from "../interfaces/categoryInterface";
import {gameInterface} from '../interfaces/gameInterface';

@Injectable({
  providedIn: 'root'
})
export class SharedStateService {
  private activeCategorySignal = signal<FilteredCategoryInterface | null>(null);
  private gamesSubject = new BehaviorSubject<gameInterface[]>([]);

  // Expose the active category as a readonly signal
  public activeCategory$ = this.activeCategorySignal.asReadonly();
  public games$ = this.gamesSubject.asObservable();

  // Method to set the active category
  setActiveCategory(category: FilteredCategoryInterface): void {
    this.activeCategorySignal.set(category);
    if (category.games) {
      this.gamesSubject.next(category.games);
    }
  }

  // Method to clear the active category
  clearActiveCategory(): void {
    this.activeCategorySignal.set(null);
  }

  // Method to update the games
  updateGames(games: gameInterface[]): void {
    this.gamesSubject.next(games);
  }
}
