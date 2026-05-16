import { Component } from '@angular/core';

@Component({
  selector: 'app-favorites',
  standalone: true,
  template: `
    <section class="page-shell">
      <h2>Favorites</h2>
      <p>Your favorite items will appear here.</p>
    </section>
  `,
  styles: [
    `:host {
      display: block;
      padding: 24px;
    }
    .page-shell {
      max-width: 900px;
      margin: 0 auto;
    }
    h2 {
      margin-bottom: 16px;
    }
    `
  ]
})
export class Favorites {}
