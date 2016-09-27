import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  /**Overriding canActivate to guard routes
   *
   * This method returns true if the logged in user's role is 'admin'
   * @returns {boolean}
   */
  canActivate() {
    if(localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'admin') {
      return true
    } else if (localStorage.getItem('user') === null){
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['user'])
      return false
    }
  }
}