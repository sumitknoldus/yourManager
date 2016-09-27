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

  /**
   * This service makes a post request and sends the user data for signup
   * @param user
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  verification(user:User):Observable<JSON> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.verify, JSON.stringify(user), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * This service makes a post requests with the unique token to get the user signed up
   * @param token
   * @returns {Observable<R>|Promise<ErrorObservable>|Promise<R>|Promise<T>|any}
   */
  signup(token:string):Observable<any> {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.postUrl, JSON.stringify({verificationToken:token}), {headers: headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  /**
   * Returns the data received in JSON format
   * @param res
   * @returns {*|{}}
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  /**
   * Handles error if there is an error in http request
   * @param error
   * @returns {ErrorObservable}
   */
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}