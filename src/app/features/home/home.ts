import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdsSliders } from "../../shared/components/ads-sliders/ads-sliders";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdsSliders],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./home.scss'],
})
export class Home {}
