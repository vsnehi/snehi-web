import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home')
        .then(c => c.Home)
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./auth/login')
        .then(c => c.Login)
  },
  {
    path: 'blog',
    loadComponent: () =>
      import('./features/blog/blog')
        .then(c => c.Blog)
  },
  {
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(c => c.Contact)
  },
  {
    path: 'startUp',
    loadComponent: () =>
      import('./features/start-up/start-up')
        .then(c => c.StartUp)
  },
  {
    path: '**',
    loadComponent: () => import('./features/page-not-found/page-not-found').then(c => c.PageNotFound)
  }
];