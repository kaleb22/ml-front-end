import { Component, input } from '@angular/core';

@Component({
  selector: 'app-item-details',
  imports: [],
  templateUrl: './item-details.component.html',
  styleUrl: './item-details.component.scss',
})
export class ItemDetailsComponent {
  id = input.required<string>();
}
