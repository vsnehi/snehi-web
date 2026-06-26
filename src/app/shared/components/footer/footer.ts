import { Component } from '@angular/core';
import { COMPANY_NAME } from '../../../core/constants/app.constants';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class AppFooter {

  readonly title = COMPANY_NAME;
  readonly currentYear = new Date().getFullYear();
  
}
