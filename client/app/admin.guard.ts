import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(private location: Location) {}

  canActivate() {
    if(localStorage.getItem('user') != null && JSON.parse(localStorage.getItem('user')).role === 'admin') {
        return true
    }
    this.location.back()
      return false
  }
}