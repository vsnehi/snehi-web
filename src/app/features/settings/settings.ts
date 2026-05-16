import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: true,
  template: `
    <section class="page-shell">
      <h2>Settings</h2>
      <p>Manage your preferences and application settings here.</p>
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
export class Settings {}
