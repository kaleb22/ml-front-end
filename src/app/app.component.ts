import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private searchService = inject(SearchService);

  breadcrumb = this.searchService.breadcrumbArr;
}
