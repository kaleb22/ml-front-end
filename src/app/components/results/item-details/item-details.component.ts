import { AfterViewInit, Component, inject, input } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { tap } from 'rxjs';

import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-item-details',
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent implements AfterViewInit {
  id = input.required<string>();

  private searchService = inject(SearchService);

  searchItemDetails$ = this.searchService.searchItemDetails$.pipe(
    tap((res) => console.log(res)),
  );

  ngAfterViewInit(): void {
    this.searchService.triggerItemDetails(this.id());
  }
}
