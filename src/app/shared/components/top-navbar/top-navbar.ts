import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { HEADER_MENU } from '../../../states/constants/navigation.constants';

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
