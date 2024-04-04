import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';

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
