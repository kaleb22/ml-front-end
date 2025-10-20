import { Routes } from '@angular/router';
import { ItemDetailsComponent } from './components/results/item-details/item-details.component';

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
    component: ItemDetailsComponent,
  },
];
