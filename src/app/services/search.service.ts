import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Subject, switchMap, tap } from 'rxjs';

import { environment } from '../environments/environment';
import { ItemDetails, SearchItems } from '../interfaces/search-items.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private httpClient = inject(HttpClient);

  private searchTermSubject = new Subject<string>();
  private searchTerm$ = this.searchTermSubject.asObservable();

  private searchIdSubject = new Subject<string>();
  private searchId$ = this.searchIdSubject.asObservable();

  private readonly API_PATH = `${environment.baseUrl}/api/items`;

  triggerSearch(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }

  triggerItemDetails(id: string) {
    this.searchIdSubject.next(id);
  }

  searchResults$ = this.searchTerm$.pipe(
    switchMap((term) =>
      this.httpClient.get<SearchItems>(`${this.API_PATH}?q=${term}`),
    ),
  );

  searchItemDetails$ = this.searchId$.pipe(
    switchMap((id) =>
      this.httpClient.get<ItemDetails>(`${this.API_PATH}/${id}`),
    ),
  );
}
