import {User} from '../shared/model/user';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import {Injectable} from '@angular/core';


@Injectable()
export class SignupService {

    private postUrl:string = 'signup';
    constructor(private http:Http) {
    }

    signup(user:User) {
        let headers = new Headers({
            'Content-Type': 'application/json'
        });

        return this.http
            .post(this.postUrl, JSON.stringify(user), {headers: headers})
            .toPromise()
            .then(response => response.json().data as User)
            .catch(this.handleError);
    }

    private handleError(error:any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

}
