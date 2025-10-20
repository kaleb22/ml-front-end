import { AfterViewInit, Component, inject, input } from '@angular/core';
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
export class ResultsComponent implements AfterViewInit {
  private searchService = inject(SearchService);

  search = input.required<string>();

  searchResults$ = this.searchService.searchResults$.pipe(
    tap((res) => console.log(res)),
  );

  ngAfterViewInit(): void {
    this.searchService.triggerSearch(this.search());
  }
}
