import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPage } from '../pages/login/login.page';
import { Observable } from 'rxjs';

const BASEURL = 'http://localhost:3000/api/garsonn';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  createUser(body): Observable<any> {
    return this.http.post(BASEURL + '/app/register', body);
  }

  logInUser(body): Observable<any> {
    return this.http.post(BASEURL + '/app/login', body);
  }

}
