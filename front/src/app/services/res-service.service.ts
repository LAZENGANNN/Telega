import { Injectable } from '@angular/core';

import axios, { Axios } from 'axios';

@Injectable({
  providedIn: 'root',
})
export class ResServiceService {
  constructor() {}

  // async test() {
  //   const response = await axios.post('/angular-app/user/create', {
  //     a: 'a',
  //   });

  //   alert(response.data);
  // }

  async registr(login: string, password: string) {
    const response = await axios.post('/angular-app/user/create', {
      login,
      password,
    });

    alert(response.data);
  }
}
