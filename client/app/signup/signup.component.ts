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
import 'rxjs/add/observable/throw';

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

  /**
   * This method calls the service to verify the email and then calls the service
   * to get the user signed up
   * @param selectedUser
   */
    signup(selectedUser:User) {
      selectedUser.role = 'user';
      selectedUser.empId = '';
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
                                    localStorage.setItem('user', JSON.stringify(data.user));
                                    this.router.navigate(['admin/user']);
                                },
                                error => swal(
                                  'error',
                                  ''+JSON.stringify(error),
                                  'error'
                                ));
                    })
                },
                error => swal(
                  'error',
                  ''+JSON.stringify(error),
                  'error'
                ));
    }

  /**
   * This method navigates the user to the login page
   */
    goBack() {
        this.router.navigate(['login']);
    }
}
