import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Subject, switchMap, tap } from 'rxjs';

import { environment } from '../environments/environment';
import { SearchItems } from '../interfaces/search-items.interface';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private httpClient = inject(HttpClient);

  private searchTermSubject = new Subject<string>();
  private searchTerm$ = this.searchTermSubject.asObservable();

  private readonly API_PATH = `${environment.baseUrl}/api/items`;

  triggerSearch(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
  }

  searchResults$ = this.searchTerm$.pipe(
    switchMap((term) =>
      this.httpClient.get<SearchItems>(`${this.API_PATH}?q=${term}`).pipe(),
    ),
  );
}
