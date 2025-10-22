import { Component, inject } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private router = inject(Router);

  input: FormControl = new FormControl<string>('');

  search() {
    const searchTerm = this.input.value as string;

    if (searchTerm.trim().length > 0) {
      this.router.navigate(['/items'], {
        queryParams: { search: this.input.value },
      });
    }
  }
}
