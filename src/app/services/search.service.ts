import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { Subject, switchMap, tap } from 'rxjs';

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

  breadcrumbArr = signal<string[]>([]);

  triggerSearch(searchTerm: string) {
    this.searchTermSubject.next(searchTerm);
    this.resetBreadcrumb();
  }

  triggerItemDetails(id: string) {
    this.searchIdSubject.next(id);
  }

  private buildBreadcrumb(res: ItemDetails) {
    this.breadcrumbArr.update((b) => ['Home', res.category, res.sub_category]);
  }

  private resetBreadcrumb() {
    this.breadcrumbArr.update((b) => []);
  }

  searchResults$ = this.searchTerm$.pipe(
    switchMap((term) =>
      this.httpClient.get<SearchItems>(`${this.API_PATH}?q=${term}`),
    ),
    tap((res) =>
      res.categories.forEach((c) =>
        this.breadcrumbArr.update((b) => ['Home', c]),
      ),
    ),
  );

  searchItemDetails$ = this.searchId$.pipe(
    switchMap((id) =>
      this.httpClient.get<ItemDetails>(`${this.API_PATH}/${id}`),
    ),
    tap((res) =>
      this.breadcrumbArr().length === 0
        ? this.buildBreadcrumb(res)
        : this.breadcrumbArr.update((b) => [...b, res.sub_category]),
    ),
  );
}
