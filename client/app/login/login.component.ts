import { Component, Input } from '@angular/core';
import { User } from '../shared/model/user';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
//import {error} from "util";

@Component({
    moduleId:module.id,
    selector: 'ym-login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css'],

})

export class LoginComponent {
    public errorMsg = '';
    @Input() user:User;
    user = {};

    constructor(private loginService: LoginService, private router: Router) {}

  /**
   * This method is called when user clicks on login.
   * It calls the service to get the user logged in,
   * and redirects it to the page depending on the user role.
   */
  login() {
        this.loginService.login(this.user)
        .then(data => {
            if(JSON.stringify(data) !== '{}') {
                localStorage.setItem('user', JSON.stringify(data));
                if(data.role === 'user'){
                    this.router.navigate(['admin/user']);
                }else{
                    this.router.navigate(['admin/asset/list']);
                }
            } else {
                this.errorMsg = 'Failed to login...';
            }
        },
        error => alert(error));
    }

  /**
   * this method navigates the user to sign up page.
   */
  goToSignup() {
        this.router.navigate(['signup']);
    }
}
