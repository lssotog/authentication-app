import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    title: 'title',
    path: '',
    loadChildren: ()=> import('./pages/home/home.module').then(m =>m.HomeModule )
  },
  {
    title: 'login',
    path: 'login',
    loadComponent: ()=> import('./pages/login/login.component').then(c =>c.LoginComponent)
  },
  {
    title: 'profile',
    path: 'profile',
    loadComponent: ()=> import('./pages/profile/profile.component').then(c =>c.ProfileComponent)
  },
  {
    title: 'register',
    path: 'register',
    loadComponent: ()=> import('./pages/register/register.component').then(c =>c.RegisterComponent)
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];
