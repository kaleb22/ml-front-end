import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'items',
    loadComponent: () =>
      import('./components/results/results.component').then(
        (c) => c.ResultsComponent,
      ),
  },
  {
    path: 'items/:id',
    loadComponent: () =>
      import('./components/results/item-details/item-details.component').then(
        (c) => c.ItemDetailsComponent,
      ),
  },
];
