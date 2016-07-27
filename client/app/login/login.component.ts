import { Component, ElementRef } from '@angular/core';
import { User } from '.././user/user'

import {LoginService} from './login.service'

@Component({
    moduleId:module.id,
    selector: 'login',
    templateUrl: 'login.component.html',
    styleUrls:['login.component.css'],
    providers:[LoginService]
})
export class LoginComponent {
    public errorMsg = '';

    public user = new User('','');

    constructor(
        private _service:LoginService) {}

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}
