import { Component, Input } from '@angular/core';
import { User } from '../shared/model/user';
import {LoginService} from './login.service';
import { Router } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'ym-login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css'],

})


export class LoginComponent {
    public errorMsg = '';
    @Input() selectedUser:User;
    user = {};

    constructor(private loginService: LoginService, private router: Router) {}

    login(user:User) {
        this.selectedUser = user;
        this.loginService.login(this.selectedUser)
        .then(data => {
            console.log(JSON.stringify(data));
            if(JSON.stringify(data) != '{}'){
                localStorage.setItem('user', JSON.stringify(data))
                this.router.navigate(['home'])
            }
            else this.errorMsg = 'Failed to login...';
        })
    }

    goToSignup() {
        this.router.navigate(['signup']);
    }
}
