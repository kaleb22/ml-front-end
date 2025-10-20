import { Component, input } from '@angular/core';
import { Item } from '../../../interfaces/search-items.interface';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-item',
  imports: [CurrencyPipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  item = input.required<Item>();
}
