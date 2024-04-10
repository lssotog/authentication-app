import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';

export const routes: Routes = [
  {
    title: 'title',
    path: '',
    component: HomeComponent
  },
  {
    title: 'login',
    path: 'login',
    component: LoginComponent
  },
  {
    title: 'profile',
    path: 'profile',
    component: ProfileComponent
  },
  {
    title: 'register',
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'**',
    redirectTo: '',
    pathMatch:'full'
  }
];
