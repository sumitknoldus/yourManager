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

  email: string = '';
  password: string= '';

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

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

}

//import {Injectable} from '@angular/core';
//import {Router} from '@angular/router';
//import {User} from '.././user/user'
//
//
//var USERS = [
//    new User('admin@admin.com','adm9'),
//    new User('user1@gmail.com','a23')
//];
//
//@Injectable()
//export class LoginService {
//
//    constructor(
//        private _router: Router){}
//
//    logout() {
//        localStorage.removeItem("user");
//        this._router.navigate(['Login']);
//    }
//
//    login(user){
//        var authenticatedUser = USERS.find(u => u.email === user.email);
//        if (authenticatedUser && authenticatedUser.password === user.password){
//            localStorage.setItem("user", authenticatedUser);
//            this._router.navigate(['Home']);
//            return true;
//        }
//        return false;
//
//    }
//
//    checkCredentials(){
//        if (localStorage.getItem("user") === null){
//            this._router.navigate(['Login']);
//        }
//    }
//}