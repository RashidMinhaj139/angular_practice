import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

//service: where authenctication logic is written
export class HardCodedAuthenticationService {
  constructor() {}
  authenticate(username: string, password: number) {
    if (username === 'Rashid' && password === 123) {
      sessionStorage.setItem('authenticateUser', username);
      return true;
    } else {
      return false;
    }
  }
  isUserLOggedIn() {
    let user = sessionStorage.getItem('authenticateUser');
    return !(user === null);
  }
  logOutUser(){
    sessionStorage.removeItem('authenticateUser');
  }
}
