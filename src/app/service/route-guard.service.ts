import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { HardCodedAuthenticationService } from './hard-coded-authentication.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivateChild {
  constructor(
    public hardCodedAuthenticationService: HardCodedAuthenticationService,
    private router: Router
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) {
    if (this.hardCodedAuthenticationService.isUserLOggedIn()) return true;
    this.router.navigate(['login']);

    return false;

    // or false based on your logic
  }
}
