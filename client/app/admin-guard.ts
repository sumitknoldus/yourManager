import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor() {}

  canActivate() {
    if(localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'admin') {
      return true
    }
    return false;
  }
}