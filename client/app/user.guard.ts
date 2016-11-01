import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  /**Overriding canActivate to guard routes
   *
   * This method returns true if the logged in user's role is 'user'
   * @returns {boolean}
   */
  canActivate() {
    if(localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'user') {
      return true
    } else if (localStorage.getItem('user') === null){
      this.router.navigate(['home'])
    } else {
      this.router.navigate(['admin/asset/list']);
      return false
    }
  }
}