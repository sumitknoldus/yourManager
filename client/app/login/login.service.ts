import { Injectable } from '@angular/core';

import {User} from '../shared/model/user';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    loginUrl = '/api/users/signin';
    responseUser: User;
    constructor(private http: Http) {}



  login(user:User) {
    this.getLoginData(user).then(userData => this.responseUser = userData);
    if (this.responseUser.email === user.email && this.responseUser.password === user.password) {
      localStorage.setItem('user', JSON.stringify(this.responseUser));
      return true;
    }
    return false;
  }

  getLoginData(user: User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.loginUrl, JSON.stringify(user), {headers: headers})
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

}
