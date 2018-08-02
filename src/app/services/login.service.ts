import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { LoginRequest, LoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  testLogin() {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    const url = 'https://wanikaniblack.azurewebsites.net/api/user/LoginUser';

    const fakeUser: LoginRequest = {
      Username: 'TestUser',
      Password: 'foobar123',
      Application: 'Web'
    }

    return this.http.post<LoginResponse>(url, fakeUser);
  }
}
