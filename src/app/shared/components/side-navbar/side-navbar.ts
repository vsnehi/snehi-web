import { Component, signal, inject, HostListener, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'side-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './side-navbar.html',
  styleUrls: ['./side-navbar.scss'],
})
export class SideNavbar {

  private router = inject(Router);

  private platformId = inject(PLATFORM_ID);

  pageTitle = signal('Dashboard');

  sidenavOpened = signal(true);

  isMinimized = signal(false);

  username = signal<string | null>(null);

  private handleUserUpdated = () => {
    this.loadUser();
  };

  constructor() {

    this.setPageTitle(
      this.router.url
    );

    if (isPlatformBrowser(this.platformId)) {
      this.loadUser();
      window.addEventListener('user-updated', this.handleUserUpdated);
    }

    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationEnd
        )
      )
      .subscribe(() => {

        this.setPageTitle(
          this.router.url
        );

      });

  }

  @HostListener(
    'document:mousemove',
    ['$event']
  )

  onMouseMove(
    event: MouseEvent
  ) {

    if (
      !isPlatformBrowser(
        this.platformId
      )
    ) {
      return;
    }

    const glow =
      document.querySelector(
        '.cursor-glow'
      ) as HTMLElement;

    if (glow) {

      glow.style.left =
        `${event.clientX}px`;

      glow.style.top =
        `${event.clientY}px`;

    }

  }

  private setPageTitle(
    url: string
  ) {

    if (
      url.includes('/music')
    ) {

      this.pageTitle.set(
        'Music'
      );

    }

    else if (
      url.includes('/videos')
    ) {

      this.pageTitle.set(
        'Videos'
      );

    }

    else if (
      url.includes('/favorites')
    ) {

      this.pageTitle.set(
        'Favorites'
      );

    }

    else if (
      url.includes('/settings')
    ) {

      this.pageTitle.set(
        'Settings'
      );

    }

    else {

      this.pageTitle.set(
        'Dashboard'
      );

    }

  }

  async loadUser() {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    try {
      const response = await fetch('/api/me');
      if (!response.ok) {
        this.username.set(null);
        return;
      }

      const result = await response.json();
      this.username.set(result.authenticated ? result.name : null);
    } catch {
      this.username.set(null);
    }
  }

  toggleMinimize() {

    this.isMinimized.update(
      value => !value
    );

  }

  navItems = [

    {
      label: 'Dashboard',
      icon: 'dashboard',
      route: '/'
    },
    
    {
      label: 'Blog',
      icon: 'rss_feed',
      route: '/blog'
    },

     {
      label: 'Vikram',
      icon: 'person',
      route: '/vikram'
    },

    {
      label: 'Music',
      icon: 'music_note',
      route: '/music'
    },

    {
      label: 'Videos',
      icon: 'video_library',
      route: '/videos'
    },

    {
      label: 'Favorites',
      icon: 'favorite',
      route: '/favorites'
    },

    {
      label: 'Settings',
      icon: 'settings',
      route: '/settings'
    }

  ];

}