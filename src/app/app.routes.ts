import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { AdminDashboard } from './features/dashboard/admin-dashboard/admin-dashboard';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: Login
  },

  {
    path: 'register',
    component: Register
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboard,
    canActivate: [authGuard]

  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
