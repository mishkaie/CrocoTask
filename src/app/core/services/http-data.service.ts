import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, EMPTY, map, Observable, shareReplay} from "rxjs";
import {ProviderApiInterface, ProviderInterface} from "../interfaces/providerInterface";

@Injectable({
  providedIn: 'root'
})
export class HttpDataService {

  constructor(private http: HttpClient) { }

  /*
  * Get providers
  * */
  public getProviders(): Observable<ProviderInterface[]> {
    return this.http
      .get<ProviderApiInterface>('https://cms.crocobet.com/integrations?type=slot&platform=desktop')
      .pipe(
        map((res) => {
          const providers = res?.data.map((game: any) => {
            return {
              name: game.name,
              provider: game.provider
            } as ProviderInterface
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
  public getSlotsByProvider(provider: string = 'egt'): void {
    this.http
      .get<any>(`https://cms.crocobet.com/integrations/v2/slot/providers/${provider}`)
      .pipe(
        catchError(() => {
          return EMPTY;
        }),
      )
      .subscribe((item) => {
        console.log(item, 'getslotbyprovider')
      });
  }


  public getSlotCategories(): Observable<any> {
    return this.http
      .get<any>('https://cms.crocobet.com/integrations/v2/slot/categories?include=games')
      .pipe(
        catchError(() => {
          return EMPTY;
        }),
        shareReplay(1)
      );
  }
}
// A user should be able to filter slots by category “or” provider.



// GET/ slot categories and slots
// https://cms.crocobet.com/integrations/v2/slot/categories?include=games
//   you can ignore platform=’mobile’ categories
// GET/ providers list
// https://cms.crocobet.com/integrations?type=slot&platform=desktop
//   GET/ slots by provider
// https://cms.crocobet.com/integrations/v2/slot/providers/TPG@bet-construct
//   “TPG@bet-construct” is provider id
// Ids: “igrosoft” “egt”
