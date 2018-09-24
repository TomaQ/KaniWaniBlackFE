import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import { RegistrationRequest } from '../models/register.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private registrationService: RegistrationService) { }

  model = new RegistrationRequest();

  ngOnInit() {
  }

  createUser(): void {
    this.registrationService.registerUser(this.model).subscribe(result => alert(result.UserId));
  }
}
