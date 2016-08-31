import {User} from "../user/user";
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';


@Injectable()
export class SignupService{

  constructor(private http: Http){}
  private postUrl: string = 'signup';

  signup(user: User){
    let headers = new Headers({
      'Content-Type': 'application/json'});

    return this.http
      .post(this.postUrl, JSON.stringify(user), {headers: headers})
      .toPromise()
      .then(response => response.json().data as User)
      .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}