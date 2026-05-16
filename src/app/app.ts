import { Component, signal } from '@angular/core';
import { SideNavbar } from './shared/components/side-navbar/side-navbar';

@Component({
  selector: 'app-root',
  imports: [SideNavbar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('snehi-web');
}
