import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(c => c.Home)
  },
  {
    path: 'music',
    loadComponent: () =>
      import('./features/music/music')
        .then(c => c.Music)
  },
  {
    path: 'videos',
    loadComponent: () =>
      import('./features/videos/videos')
        .then(c => c.Videos)
  },
  {
    path: 'favorites',
    loadComponent: () =>
      import('./features/favorites/favorites')
        .then(c => c.Favorites)
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('./features/settings/settings')
        .then(c => c.Settings)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./shared/account/login/login')
        .then(c => c.Login)
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/blog')
        .then(c => c.Blog)
  },
  {
    path: 'vikram',
    loadComponent: () =>
      import('./features/vikram/vikram')
        .then(c => c.Vikram)
  }
];