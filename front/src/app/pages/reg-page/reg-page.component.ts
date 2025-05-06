import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResServiceService } from '../../services/res-service.service';

@Component({
  selector: 'app-reg-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './reg-page.component.html',
  styleUrl: './reg-page.component.css',
})
export class RegPageComponent {
  constructor(private resService: ResServiceService) {}

  loginField: string = '';
  passwordField: string = '';
  confirmPassField: string = '';

  changeLoginField(event: Event): void {
    this.loginField = (event.target as HTMLInputElement).value;
  }
  changePasswordField(event: Event): void {
    this.passwordField = (event.target as HTMLInputElement).value;
  }
  changeConfirmPassField(event: Event): void {
    this.confirmPassField = (event.target as HTMLInputElement).value;
  }

  sendPostRegistration(): void {
    if (
      this.loginField != '' &&
      this.passwordField != '' &&
      this.passwordField === this.confirmPassField
    ) {
      this.resService.registr(this.loginField, this.passwordField);
    } else if (this.loginField === '' || this.passwordField === '') {
      alert('заполните все поля');
    } else if (this.passwordField != this.confirmPassField) {
      alert('пароли не совпадают');
    }
  }

  // ngOnInit(): void {
  //   console.log('init');
  //   this.resService.test();
  // }
}
