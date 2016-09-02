import {User} from '../shared/model/user';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';
import {Response} from "angular2/http";


@Injectable()
export class SignupService {

  private postUrl:string = '/api/users/signup';
  constructor(private http:Http) {
  }

  signup(user:User) {
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http
      .post(this.postUrl, JSON.stringify(user), {headers: headers})
      .toPromise()
      .then(this.extractData)
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
    return Promise.reject(errMsg);
  }

}
