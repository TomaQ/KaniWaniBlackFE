import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { LoginRequest } from '../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  model = new LoginRequest();

  ngOnInit() {
  }

  loginUser(): void {
    this.loginService.loginUser(this.model).subscribe(result => alert(result.token));
  }

}
