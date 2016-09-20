//import {User} from '../shared/model/user';
//import { Headers, Http } from '@angular/http';
//
//import 'rxjs/add/operator/toPromise';
//import {Injectable} from '@angular/core';
//import {Response} from "angular2/http";
//
//
//@Injectable()
//export class SignupService {
//
//  private postUrl:string = '/api/users/signup';
//  private verify:string = '/api/users/verify';
//  constructor(private http:Http) {
//  }
//
//  verification(user:User) {
//    let headers = new Headers({
//      'Content-Type': 'application/json'
//    });
//
//    return this.http
//      .post(this.verify, JSON.stringify(user), {headers: headers})
//      .toPromise()
//      .then(this.extractData)
//      .catch(this.handleError);
//  }
//
//    signUp(token:string) {
//        let headers = new Headers({
//            'Content-Type': 'application/json'
//        });
//
//        return this.http
//            .post(this.postUrl, JSON.stringify({verificationToken:token}), {headers: headers})
//            .toPromise()
//            .then(this.extractData)
//            .catch(this.handleError);
//    }
//
//  private extractData(res: Response) {
//    let body = res.json();
//    return body || { };
//  }
//
//  private handleError(error: any) {
//    let errMsg = (error.message) ? error.message :
//      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//    console.error(errMsg);
//    return Promise.reject(errMsg);
//  }
//
//}

////////////////////////////////////////////////////////////////////

import {User} from '../shared/model/user';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Response} from "angular2/http";
import { Observable }     from 'rxjs/Observable';


@Injectable()
export class SignupService {

    private postUrl:string = '/api/users/signup';
    private verify:string = '/api/users/verify';
    constructor(private http:Http) {
    }

    verification(user:User):Observable<JSON> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.verify, JSON.stringify(user), {headers: headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    signup(token:string):Observable<any> {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.postUrl, JSON.stringify({verificationToken:token}), {headers: headers})
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

    private handleError(error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}