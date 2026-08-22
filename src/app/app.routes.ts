import { Routes } from '@angular/router';
import { Login } from './pages/not-logged/login/login';
import { Home } from './pages/logged/home/home';
import { Registration } from './pages/not-logged/registration/registration';
import { ForgotPassword } from './pages/not-logged/forgot-password/forgot-password';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'login',
    component: Login
  },
  {
    path: 'cadastre-se',
    component: Registration
  },
  {
    path: 'esqueci-minha-senha',
    component: ForgotPassword
  }
];