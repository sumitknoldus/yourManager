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

    swal({
      title: 'Loading...',
        input:'info',
      showConfirmButton: false
    });

    this.signupService.verification(selectedUser)
      .subscribe(data => {
          swal({
            title: '<h4>Verification token has been sent on your Email.</h4>',
            input: 'password',
            inputAttributes: {
              'maxlength': 10,
              'autocapitalize': 'off',
              'autocorrect': 'off'
            },
              inputValidator: function(value) {
                  return new Promise(function(resolve, reject) {
                      if (value !== '') {
                          resolve();
                      } else {
                          reject('You cant left this field empty..!!');
                      }
                  });
              }
          }).then(password => {
              this.signupService.signup(password)
                .subscribe(data => {
                    localStorage.setItem('user', JSON.stringify(data.user));
                    localStorage.setItem('message', data.message);
                    this.router.navigate(['admin/user']);
                  },
                  error => swal(
                    'Error',
                    ''+error,
                    'error'
                  ));
          })
        },
        error => swal(
          'Error',
          ''+error,
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
