import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const authGuard: CanActivateFn = () => {
    console.log('Guard exécuté');
    const authService = inject(Auth);
    const router = inject(Router);

    if (authService.isLoggedIn()) {
      return true;
    }

    console.log('Redirection vers login');
    router.navigate(['/login']);
    return false;
};
