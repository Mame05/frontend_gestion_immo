import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { AdminDashboard } from './features/dashboard/admin-dashboard/admin-dashboard';
import { authGuard } from './core/guards/auth-guard';
import { AgenceDashboard } from './features/dashboard/agence-dashboard/agence-dashboard';
import { roleGuard } from './core/guards/role-guard';

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
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['ADMIN']
    }

  },

  {
    path: 'agence-dashboard',
    component: AgenceDashboard,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['AGENCE']
    }

  },

   /*{
    path: 'client/dashboard',
    component: DashboardClient,
    canActivate: [authGuard, roleGuard],
    data: {
      roles: ['CLIENT']
    }
  },*/

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
