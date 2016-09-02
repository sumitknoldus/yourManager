import { Injectable } from '@angular/core';

import {User} from '../shared/model/user';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

var USERS =  [
    {
        email:'sumit@knoldus.com',
        password:'11'
    },
    {
        email:'amit@knoldus.com',
        password:'11'
    },
    {
        email:'akshayrana@knoldus.in',
        password:'11'
    }
];

@Injectable()
export class LoginService {
    loginUrl = '/api/users/signin';
    constructor(private http: Http) {}

  login(user: User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.loginUrl, JSON.stringify(user), {headers: headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
