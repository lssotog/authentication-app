import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './shared/layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './shared/layouts/private-layout/private-layout.component';

export const routes: Routes = [
  {
    title: 'title',
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: ()=> import('./pages/home/home.module').then(m =>m.HomeModule )
      }
    ],
  },
  {
    title: 'login',
    path: 'login',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadComponent: ()=> import('./pages/login/login.component').then(c =>c.LoginComponent)
      }
    ]
  },
  {
    title: 'profile',
    path: 'profile',
    component: PrivateLayoutComponent,
    children: [
      {
        path:'',
        loadComponent: ()=> import('./pages/profile/profile.component').then(c =>c.ProfileComponent)
      }
    ]
  },
  {
    title: 'register',
    path: 'register',
    component: PublicLayoutComponent,
    children: [
      {
        path:'',
        loadComponent: ()=> import('./pages/register/register.component').then(c =>c.RegisterComponent)
      }
    ]
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];
