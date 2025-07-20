import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
  },
  {
    path: 'todos',
    loadComponent: () => import('./features/todos/todos').then((m) => m.Todos),
  },
  {
    path: 'users',
    loadComponent: () => import('./features/users/users').then((m) => m.Users),
  },
];
