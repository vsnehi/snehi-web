import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_TITLE } from '../../states/constants/app.constants';

@Component({
  selector: 'blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./blog.scss'],
})
export class Blog {
  readonly companyName = APP_TITLE;
}
