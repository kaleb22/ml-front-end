import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { tap } from 'rxjs';

import { SearchService } from '../../services/search.service';
import { ItemComponent } from './item/item.component';

@Component({
  selector: 'app-results',
  imports: [AsyncPipe, ItemComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  private searchService = inject(SearchService);

  searchResults$ = this.searchService.searchResults$.pipe(
    tap((res) => console.log(res)),
  );
}
