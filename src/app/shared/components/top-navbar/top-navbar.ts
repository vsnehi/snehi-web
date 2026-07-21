import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HEADER_MENU } from '../../../states/constants/navigation.constants';
import { AppFooter } from "../footer/footer";

@Component({
  selector: 'top-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule, AppFooter],
  templateUrl: './top-navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './top-navbar.scss',
})
export class TopNavbar {
  headerMenu = HEADER_MENU;
}
