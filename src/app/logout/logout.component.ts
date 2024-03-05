import { Component } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
})
export class LogoutComponent {
  constructor(
    public hardcodedAuthentiCationservice: HardCodedAuthenticationService
  ) {}
  ngOnInit() {
    this.hardcodedAuthentiCationservice.logOutUser();
  }
}
