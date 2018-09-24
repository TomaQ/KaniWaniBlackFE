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

  loginUser(request: LoginRequest) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    //TODO: put url in environment vars
    //const url = 'https://wanikaniblack.azurewebsites.net/api/user/LoginUser';
    const url = 'http://localhost/kaniwaniblack/api/user/LoginUser';

    request.Application = 'Web';

    return this.http.post<LoginResponse>(url, request);
  }
}
