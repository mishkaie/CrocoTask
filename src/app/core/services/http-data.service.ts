import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, map, Observable, shareReplay, tap} from "rxjs";
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

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }

  /*
  * Get providers
  * */
  public getProviders(): Observable<FilteredProviderInterface[]> {
    return this.http
      .get<ProviderRequestApiInterface>('https://cms.crocobet.com/integrations?type=slot&platform=desktop')
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
        catchError(() => EMPTY),
        shareReplay(1)
      );
  }

  /*
  * Get slots with provider name
  * */
  public getSlotsByProvider(provider: string = 'egt'): Observable<any> {
    return this.http
      .get<any>(`https://cms.crocobet.com/integrations/v2/slot/providers/${provider}`)
      .pipe(
        map(res => res.data.games),
        catchError(() => {
          return EMPTY;
        }),
      )
  }


  public getSlotCategories(): Observable<FilteredCategoryInterface[]>{
    return this.http
      .get<CategoryRequestApiInterface>('https://cms.crocobet.com/integrations/v2/slot/categories?include=games')
      .pipe(
        map((res) => {
           // Filter out undefined
          return res?.data?.map((category: CategoryInterface) => {
            if (category?.category.includes('web')) {
              return {
                name: category.name,
                category: category.category,
                totalGames: category.totalGames
              } as FilteredCategoryInterface;
            }
            return;
          }).filter((category): category is FilteredCategoryInterface => !!category);
        }),
        catchError(() => {
          return EMPTY;
        }),
        shareReplay(1)
      );
  }
}

