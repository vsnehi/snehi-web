import { Component, ChangeDetectionStrategy } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AdsSliders } from "../../shared/components/ads-sliders/ads-sliders";
import { FromIdeaToProduction } from "../../shared/components/from-idea-to-production/from-idea-to-production";
import { OurServices } from "../../shared/components/our-services/our-services";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, AdsSliders, FromIdeaToProduction, OurServices],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./home.scss'],
})
export class Home {}
