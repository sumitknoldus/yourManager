import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import {User} from '../shared/model/user';
import {SignupService} from './signup.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';

@Component({
    moduleId: module.id,
    selector: 'ym-signup',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.css'],
    providers: [SignupService]
})

export class SignupComponent {

    @Input()
    user = {};

    constructor(private router:Router, private signupService:SignupService) {
    }

    signup(selectedUser:User) {
      selectedUser.role = 'user';
      console.log("--------selected user" + JSON.stringify(selectedUser))
        this.signupService.verification(selectedUser)
            .subscribe(data => {
                    swal({
                        title: 'Verify token sent on your Email.',
                        input: 'password',
                        inputAttributes: {
                            'maxlength': 10,
                            'autocapitalize': 'off',
                            'autocorrect': 'off'
                        }
                    }).then(password => {

                        this.signupService.signup(password)
                            .subscribe(data => {
                                    localStorage.setItem('user', JSON.stringify(data));
                                    this.router.navigate(['user']);
                                },
                                error => alert(error));
                    })
                },
                error => alert(error));
    }


    goBack() {
        this.router.navigate(['login']);
    }
}
