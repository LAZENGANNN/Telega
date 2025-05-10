import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {
    // this.checkAuth();
  }

  _isAuthenticated: boolean = false;

  async registrate(login: string, password: string) {
    const response = await axios.post('user/create', {
      login,
      password,
    });

    alert(response.data);
  }

  async authenticate(login: string, password: string) {
    const response = await axios.post('/angular-app/user/auth', {
      login,
      password,
    });
    if (response.data === 'success') {
      console.log(response.data);
      this._isAuthenticated = true;
      this.router.navigate(['/chats']);
    } else {
      alert(response.data);
    }
  }

  public get isAuthenticated (){
    return this._isAuthenticated
  }

  async checkAuth(): Promise<boolean> {
    const response = await axios.get('/angular-app/user/checkAuth');

    this._isAuthenticated = response.data.isAuth;

    console.log(this._isAuthenticated);

    return response.data.isAuth;
  }
}
