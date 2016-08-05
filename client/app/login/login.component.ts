import { Component, Input } from '@angular/core';
import { User } from '.././user/user'
import {LoginService} from './login.service'
import { Router,ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    moduleId:module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css'],
    providers:[LoginService]
})


export class LoginComponent {
    public errorMsg = '';
    @Input() selectedUser:User;
    user = {};

    constructor(private loginService: LoginService, private router: Router) {}

    login(user:User){
        this.selectedUser = user;

        if(!this.loginService.login(this.selectedUser)){
            this.errorMsg = 'Failed to login';
        }
        else{
            this.router.navigate(['/dashboard']);
        }
    }
}
