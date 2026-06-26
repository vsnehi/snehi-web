import { Component } from '@angular/core';
import { HEADER_MENU } from '../../../core/constants/navigation.constants';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'top-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.scss',
})
export class TopNavbar {
  headerMenu = HEADER_MENU;

}
