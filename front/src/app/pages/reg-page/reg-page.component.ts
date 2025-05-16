import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-reg-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './reg-page.component.html',
  styleUrl: './reg-page.component.css',
})
export class RegPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  loginField: string = '';
  passwordField: string = '';
  confirmPassField: string = '';

  isAuth: boolean = false;
  authLoginField: string = '';
  authPassField: string = '';

  changeLoginField(event: Event): void {
    this.loginField = (event.target as HTMLInputElement).value;
  }
  changePasswordField(event: Event): void {
    this.passwordField = (event.target as HTMLInputElement).value;
  }
  changeConfirmPassField(event: Event): void {
    this.confirmPassField = (event.target as HTMLInputElement).value;
  }
  changeAuthLoginField(event: Event): void {
    this.authLoginField = (event.target as HTMLInputElement).value;
  }
  changeAuthPassField(event: Event): void {
    this.authPassField = (event.target as HTMLInputElement).value;
  }

  sendPostRegistration(): void {
    if (
      this.loginField != '' &&
      this.passwordField != '' &&
      this.passwordField === this.confirmPassField
    ) {
      this.authService.registrate(this.loginField, this.passwordField);
    } else if (this.loginField === '' || this.passwordField === '') {
      alert('заполните все поля');
    } else if (this.passwordField != this.confirmPassField) {
      alert('пароли не совпадают');
    }
  }

  sendPostAuthentication(): void {
    if (this.authLoginField != '' && this.authPassField != '') {
      this.authService.authenticate(this.authLoginField, this.authPassField);
    }
  }

  ngOnInit(): void {
    const b = localStorage.getItem('isAuthenticated');
    if (b) {
      console.log(
        localStorage.getItem('isAuthenticated'),
        localStorage.getItem('userData')
      );
      this.router.navigate(['/chats']);
    }
  }
}
