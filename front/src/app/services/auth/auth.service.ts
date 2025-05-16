import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {
    this.checkAuth();
  }

  private _isAuthenticated: boolean = false;
  dataChanged = new EventEmitter<boolean>();

  async registrate(login: string, password: string): Promise<void> {
    const response = await axios.post('user/create', {
      login,
      password,
    });

    alert(response.data);
  }

  async authenticate(login: string, password: string): Promise<void> {
    const response = await axios.post('/angular-app/user/auth', {
      login,
      password,
    });
    if (response.data === 'success') {
      console.log(response.data);
      this._isAuthenticated = true;
      this.router.navigate(['/chats']);

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('userData', JSON.stringify({ login, password }));
    } else {
      alert(response.data);
    }
  }

  public get isAuthenticated() {
    return this._isAuthenticated;
  }

  async checkAuth(): Promise<boolean> {
    const response = await axios.get('/angular-app/user/checkAuth');

    this._isAuthenticated = response.data.isAuth;

    console.log(this._isAuthenticated);

    this.dataChanged.emit(this._isAuthenticated);

    return response.data.isAuth;
  }

  async logout(): Promise<void> {
    const res = await axios.get('/angular-app/user/logout');
    alert(res.data);
    this.router.navigate(['/']);
  }
}
