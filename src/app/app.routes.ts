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
    path: 'contact',
    loadComponent: () =>
      import('./features/contact/contact')
        .then(c => c.Contact)
  }
];