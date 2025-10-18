import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { SearchService } from './../../services/search.service';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private searchService = inject(SearchService);
  private router = inject(Router);

  input: FormControl = new FormControl<string>('');

  searchResults$ = this.searchService.searchResults$;

  search() {
    this.searchService.triggerSearch(this.input.value);
    this.router.navigate(['/items'], {
      queryParams: { search: this.input.value },
    });
  }
}
