import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { ChevronLeft } from '@primeicons/angular/chevron-left';
import { ChevronRight } from '@primeicons/angular/chevron-right';

@Component({
  selector: 'ads-sliders',
  imports: [CarouselModule],
  templateUrl: './ads-sliders.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: true,
  styleUrl: './ads-sliders.scss',
})
export class AdsSliders implements OnInit {
  items = [1, 2, 3, 4, 5];

  ngOnInit(): void {
    // const myCarousel = document.getElementById('myCarousel');

    // myCarousel?.addEventListener('slide.bs.carousel', event => {
    //   // do something...
    // });
  }
}
