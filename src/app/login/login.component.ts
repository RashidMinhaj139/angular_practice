import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = 'Rashid';
  password = 123;
  username2 = 'amir';
  password2 = '1234';
  constructor(
    private router: Router,
    private hardcodedAuthentiCationservice: HardCodedAuthenticationService
  ) {}

  handleLogin = () => {
    if (
      this.hardcodedAuthentiCationservice.authenticate(
        this.username,
        this.password
      )
    ) {
      this.router.navigate(['welcome3', this.username]);
      console.log('login success');
    } else {
      console.log('invalid crendentials');
    }
  };
}
