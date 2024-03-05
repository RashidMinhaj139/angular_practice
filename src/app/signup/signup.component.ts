import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  username = 'Rashid';
  password = 123;
  c_password = 123;

  constructor(private router: Router) {}
  handlesignup = () => {
    console.log('signup is working');
    if (this.username === 'Rashid' && this.password === 123) {
      this.router.navigate(['welcome3', this.username]);

      console.log('corrected');
    } else {
      console.log('failed authentication');
    }
    console.log(this.username, ',', this.password, ',', this.c_password);
  };
}
