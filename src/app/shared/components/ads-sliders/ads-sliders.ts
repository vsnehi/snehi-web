import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';

@Component({
  selector: 'ads-sliders',
  imports: [CarouselModule, ChevronLeft, ChevronRight],
  templateUrl: './ads-sliders.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  styleUrl: './ads-sliders.scss',
})
export class AdsSliders {
  items = [1, 2, 3, 4, 5];
}
