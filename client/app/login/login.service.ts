import { Injectable } from '@angular/core';
import {User} from '../shared/model/user';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {
    loginUrl = '/api/users/signin';
    constructor(private http: Http) {}

  /**
   * This method makes a post call to get the user logged in to the application.
   * It returns user object in response if the credentials are correct
   * @param user
   * @returns {any<T>|Promise<*>|Promise<R>|Promise<T>|any}
   */
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

  /**
   * Handles error if there is an error in http request
   * @param error
   * @returns {ErrorObservable}
   */
  private handleError(error: any) {
    let errMsg = (error._body) ? error._body :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  /**
   * Returns the data received in JSON format
   * @param res
   * @returns {*|{}}
   */
  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

}
