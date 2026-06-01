import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  constructor(
    private authService: Auth,
    private router: Router
  ) {}
  logout(): void {
  this.authService.logout();
  this.router.navigate(['/login']);
}
}
