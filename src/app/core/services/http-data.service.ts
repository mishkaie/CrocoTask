import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, map, Observable, shareReplay, tap, throwError} from "rxjs";
import { SharedStateService } from './shared-state.service';
import {
  FilteredProviderInterface,
  ProviderInterface,
  ProviderRequestApiInterface
} from "../interfaces/providerInterface";
import {
  CategoryInterface,
  CategoryRequestApiInterface,
  FilteredCategoryInterface
} from "../interfaces/categoryInterface";
import { API_ENDPOINTS } from '../../../environment/environment';
import { gameInterface } from '../interfaces/gameInterface';

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(
    private http: HttpClient,
    private sharedState: SharedStateService
  ) { }

  /*
  * Get providers
  * */
  public getProviders(): Observable<FilteredProviderInterface[]> {
    return this.http
      .get<ProviderRequestApiInterface>(API_ENDPOINTS.PROVIDERS)
      .pipe(
        map((res) => {
          const providers = res?.data.map((game: ProviderInterface) => {
            return {
              name: game.name,
              provider: game.provider
            } as FilteredProviderInterface
          });
          // Use a Set to filter out unique providers
          return Array.from(new Set(providers));
        }),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  /*
  * Get slots with provider name
  * */
  public getSlotsByProvider(provider: string = 'egt'): Observable<gameInterface[]> {
    return this.http
      .get<any>(`${API_ENDPOINTS.SLOTS_BY_PROVIDER}${provider}`)
      .pipe(
        map(res => res.data.games),
        tap(games => this.sharedState.updateGames(games)),
        catchError(this.handleError),
      )
  }

  public getSlotCategories(): Observable<FilteredCategoryInterface[]>{
    return this.http
      .get<CategoryRequestApiInterface>(API_ENDPOINTS.SLOT_CATEGORIES)
      .pipe(
        map((res) => {
           // Filter out undefined
          return res?.data?.map((category: CategoryInterface) => {
            if (category?.category.includes('web')) {
              return {
                name: category.name,
                category: category.category,
                totalGames: category.totalGames,
                games: category.games
              } as FilteredCategoryInterface;
            }
            return;
          }).filter((category): category is FilteredCategoryInterface => !!category);
        }),
        catchError(this.handleError),
        shareReplay(1)
      );
  }

  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong; please try again later.'));
  }
}

