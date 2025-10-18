import { AsyncPipe } from '@angular/common';
import { SearchService } from './../../services/search.service';
import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private searchService = inject(SearchService);

  input: FormControl = new FormControl<string>('');

  searchResults$ = this.searchService.searchResults$;

  search() {
    this.searchService.triggerSearch(this.input.value);
  }
}
