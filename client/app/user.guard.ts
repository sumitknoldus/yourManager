import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    if(localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'user') {
      return true
    } else if (localStorage.getItem('user') === null){
      this.router.navigate(['login'])
    } else {
      this.router.navigate(['asset/list'])
      return false
    }
  }
}