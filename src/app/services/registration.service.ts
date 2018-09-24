import { Injectable } from '@angular/core';
import { RegistrationRequest, RegistrationResponse } from '../models/register.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(request: RegistrationRequest) {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');

    //TODO: put url in environment vars
    //const url = 'https://wanikaniblack.azurewebsites.net/api/user/LoginUser';
    const url = 'http://localhost/kaniwaniblack/api/user/CreateUser';

    request.Application = 'Web';

    return this.http.post<RegistrationResponse>(url, request);
  }
}
