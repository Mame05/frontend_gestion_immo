import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(Auth);
  const router = inject(Router);

  const expectedRoles = route.data['roles'] as string[];

  const userRole = authService.getUserRole();

  if (userRole && expectedRoles.includes(userRole)) {
    return true;
  }
  router.navigate(['/login']);
  return false;

};
