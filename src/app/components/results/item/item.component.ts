import { Component, inject, input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';

import { Item } from '../../../interfaces/search-items.interface';

@Component({
  selector: 'app-item',
  imports: [CurrencyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  item = input.required<Item>();

  private router = inject(Router);

  openDetails(id: string) {
    this.router.navigate(['items', id]);
  }
}
