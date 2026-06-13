import { Component } from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-dashboard',
  imports: [CommonModule],
  templateUrl: './admin-dashboard.html',
  styleUrl: './admin-dashboard.css',
})
export class AdminDashboard {
  constructor(
    private authService: Auth,
    private router: Router,
    private http: HttpClient
  ) {}
  ngOnInit() {
  console.log(this.authService.getUserRole());
 }
  logout(): void {
  this.authService.logout();
  this.router.navigate(['/login']);
 }
 testerInterceptor() {
  this.http
    .get('https://backend-gestion-immo.onrender.com/users')
    .subscribe({
      next: res => console.log(res),
      error: err => console.log(err)
    });
}
}
