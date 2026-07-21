import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'side-navbar',
  standalone: true,
  imports: [],
  templateUrl: './side-navbar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ['./side-navbar.scss'],
})
export class SideNavbar {}
