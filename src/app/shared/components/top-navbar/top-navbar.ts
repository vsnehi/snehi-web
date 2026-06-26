import { Component } from '@angular/core';
import { HEADER_MENU } from '../../../core/constants/navigation.constants';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'top-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-navbar.html',
  styleUrl: './top-navbar.scss',
})
export class TopNavbar {
  headerMenu = HEADER_MENU;

}
