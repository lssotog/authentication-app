import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'title',
    path: '',
    loadComponent: ()=> import('./pages/home/home.component').then(m =>m.HomeComponent)
  },
  {
    title: 'login',
    path: 'login',
    loadComponent: ()=> import('./pages/login/login.component').then(m =>m.LoginComponent)
  },
  {
    title: 'profile',
    path: 'profile',
    loadComponent: ()=> import('./pages/profile/profile.component').then(m =>m.ProfileComponent)
  },
  {
    title: 'register',
    path: 'register',
    loadComponent: ()=> import('./pages/register/register.component').then(m =>m.RegisterComponent)
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];
