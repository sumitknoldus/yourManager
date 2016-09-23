import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router:Router) {
  }

  canActivate() {
    if(localStorage.getItem('user') === null) {
      return true
    } else if (JSON.parse(localStorage.getItem('user')).role === 'admin') {
      this.router.navigate(['admin/asset/list']);
      return false
    } else if (JSON.parse(localStorage.getItem('user')).role === 'user') {
      this.router.navigate(['user']);
      return false
    } else return false
  }
}