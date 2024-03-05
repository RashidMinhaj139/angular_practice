import { Component } from '@angular/core';
import { HardCodedAuthenticationService } from '../service/hard-coded-authentication.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  // isUserLoggedIn: boolean = false;
  constructor(
    public hardcodedAuthticationService: HardCodedAuthenticationService
  ) {}

}
