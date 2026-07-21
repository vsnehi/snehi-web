import { Component, signal } from '@angular/core';
import { TopNavbar } from './shared/components/top-navbar/top-navbar';
import { AppFooter } from './shared/components/footer/footer';
import { COMPANY_NAME } from './states/constants/app.constants';
@Component({
  selector: 'app-root',
  imports: [TopNavbar, AppFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {

  protected readonly title = signal(COMPANY_NAME);
  
}
