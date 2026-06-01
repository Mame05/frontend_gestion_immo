import { Component} from '@angular/core';
import { Auth } from '../../../core/services/auth';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
   email = '';
  mot_passe = '';

  constructor(
    private authService: Auth,
    private router: Router
  ) {}

  login() {

    const data = {
      email: this.email,
      mot_passe: this.mot_passe
    };

    this.authService.login(data).subscribe({
      next: (response) => {

        this.authService.saveToken(response.access_token);

        console.log('Connexion réussie');
        console.log(response.access_token);

        this.router.navigate(['/admin-dashboard']);
      },

      error: (err) => {
        console.log(err);
        alert('Email ou mot de passe incorrect');
      }
    });
  }
  

}
