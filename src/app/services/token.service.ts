import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  result: any;
  constructor(private storage: Storage) { }

  SetToken(token) {
    this.storage.set('auth-token', token);
    console.log('token : ', token);
  }
  async GetToken() {
    return await this.storage.get('auth-token');
  }
  DeleteToken() {
    return this.storage.remove('auth-token');
  }
  async GetPayload() {
    const token = await this.storage.get('auth-token');
    console.log('TOKEN : ', token);
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = JSON.parse(window.atob(payload));

      console.log('IN IF : ', payload.data);

    }
    console.log('RESULT :', payload.data);
    return payload.data;
  }
}
